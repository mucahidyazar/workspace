import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styles from './styles.module.scss'
import { getItemStyle } from '../../../../config/helper'

function List({ task, idx, tasksData }) {
  return (
    <Draggable draggableId={task} index={idx}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          {tasksData[task].content}
        </div>
      )}
    </Draggable>
  )
}

export default List
