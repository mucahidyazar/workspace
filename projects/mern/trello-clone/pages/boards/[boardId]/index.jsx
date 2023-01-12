import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import BoardLayout from '../../../views/layouts/BoardLayout'
import BoardHeader from '../../../views/layouts/BoardHeader'
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
} from 'react-beautiful-dnd'
import { getItemStyle, getListStyle } from '../../../config/helper'
import DroppableComp from '../../../views/components/DroppableComp'
import List from './List'
import { setListorder, setNewlist } from '../../../redux/actions/boards'

resetServerContext()

function Board({ personal, boards, dispatch }) {
  const {
    query: { boardId },
  } = useRouter()

  const listData = boards[0]
  const listOrderData = boards[0].listOrder
  const listsData = boards[0].lists
  const tasksData = boards[0].tasks

  console.log(listData)
  console.log(listOrderData)
  console.log(listsData)
  console.log(tasksData)

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result

    if (!destination) {
      return
    }

    if (destination.id === source.id && destination.index === source.index) {
      return
    }

    //the other type for this project = task
    if (type === 'list') {
      const newListOrder = Array.from(listOrderData)
      newListOrder.splice(source.index, 1)
      newListOrder.splice(destination.index, 0, draggableId)

      dispatch(setListorder(newListOrder, boardId - 1)) //listOder will be dispatched
      return
    }

    const start = listsData[source.droppableId]
    const finish = listsData[destination.droppableId]

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newTask = {
        ...start,
        taskIds: newTaskIds,
      }

      const newLists = {
        ...listsData,
        [newTask.id]: newTask,
      }

      dispatch(setNewlist(newLists, boardId - 1)) //newLists will dispatch
      return
    }

    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    }
    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    }
    const newLists = {
      ...listsData,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    }
    dispatch(setNewlist(newLists, boardId - 1)) //newLists will dispatch
    return
  }

  return (
    <BoardLayout
      title="Deneme"
      style={{
        background: `url(${personal[parseInt(boardId)].background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <BoardHeader />

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-list" direction="horizontal" type="list">
          {(provided, snapshot) => (
            <div className={styles.container} ref={provided.innerRef}>
              {listOrderData.map((listOrder, index) => (
                <Draggable
                  draggableId={listOrder}
                  index={index}
                  key={listOrder}
                >
                  {(provided, snapshot) => (
                    <div
                      className={styles.listsContainer}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <p {...provided.dragHandleProps}>
                        {listsData[listOrder].title}
                      </p>
                      <Droppable droppableId={listOrder} type="task">
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                            className={styles.listContainer}
                          >
                            {listsData[listOrder].taskIds.map((task, idx) => (
                              <List
                                key={tasksData[task].id}
                                task={task}
                                idx={idx}
                                tasksData={tasksData}
                              />
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </BoardLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    templates: state.boards.templates,
    recentlyViewed: state.boards.recentlyViewed,
    personal: state.boards.personal,
    boards: state.boards.boards,
  }
}

export default connect(mapStateToProps)(Board)
//<DroppableComp state={state} index={index} brd={brd} />
