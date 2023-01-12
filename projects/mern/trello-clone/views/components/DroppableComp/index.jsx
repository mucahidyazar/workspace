import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styles from './styles.module.scss'
import DraggableComp from '../DraggableComp'
import { getListStyle } from '../../../config/helper'

function DroppableComp({ state, index, brd, dropStyle, dragStyle }) {
  return (
    <Droppable key={index} droppableId={`droppable${index + 1}`}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          <p>{Object.keys(state)[index]}</p>
          {brd.map((item, idx) => (
            <DraggableComp key={idx} item={item} idx={idx} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default DroppableComp
