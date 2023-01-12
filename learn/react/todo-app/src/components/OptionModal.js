import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.shouldToDo}
            contentLabel="Should To Do"
            onRequestClose={props.closeShouldToDo}
            ariaHideApp={false}
        >
            <h3>Should To Do</h3>
            <p>{props.shouldToDo}</p>
            <button onClick={props.closeShouldToDo}>Okey</button>
        </Modal>
    )
}

export default OptionModal;