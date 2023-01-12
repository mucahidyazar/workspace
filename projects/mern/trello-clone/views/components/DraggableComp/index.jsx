import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styles from './styles.module.scss'
import { getItemStyle } from '../../../config/helper'

function DraggableComp({ item, idx }) {
  return (
    <Draggable key={item.id} draggableId={String(item.id)} index={idx}>
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
          {item.title}
        </div>
      )}
    </Draggable>
  )
}

export default DraggableComp
