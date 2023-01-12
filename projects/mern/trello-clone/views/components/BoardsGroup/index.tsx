import React, { useState } from 'react'
import styles from './styles.module.scss'
import Icon from '../Icon'
import BoardCard from '../BoardCard'
import Link from 'next/link'
import Select from '../../ui/Select'
import Modal from 'react-modal'
import { addBoard } from '../../../redux/actions/boards'
import { connect } from 'react-redux'

const customStyles = {
  content: {
    top: '120px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
}

Modal.setAppElement('#__next')

interface BoardsGroup {
  category?: boolean
  add?: boolean
  boards: any[]
}

function BoardsGroup({ category, add, backgrounds, boards, dispatch }) {
  const [isBoardsGroupActive, setIsBoardsGroupActive] = useState(true)
  const [modalBackground, setModalBackground] = useState(backgrounds[0])
  const [isActiveAdd, setIsActiveAdd] = useState(false)
  const [boardName, setBoardName] = useState('')

  let subtitle
  const openModal = () => {
    setIsActiveAdd(true)
    console.log(isActiveAdd)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log('a')
  }

  function closeModal() {
    setIsActiveAdd(false)
  }

  const handlerIsBoardActive = () => {
    setIsBoardsGroupActive((prevState) => !prevState)
  }

  const addBoardHandler = () => {
    if (boardName && boardName !== '') {
      dispatch(
        addBoard({
          id: backgrounds.length + 1,
          type: 'personal',
          name: boardName,
          background: modalBackground.background,
        })
      )
      setBoardName('')
      setIsActiveAdd(false)
    }
  }

  if (isBoardsGroupActive) {
    return (
      <div className={styles.boardsGroup}>
        <div className={styles.boardHeader}>
          <div className={styles.boardHeaderText}>
            <Icon name="board" />
            <p>Most popular templates</p>
          </div>
          <Icon name="close" onClick={handlerIsBoardActive} />
        </div>
        {category ? (
          <div className={styles.boardCategory}>
            <p>Get going faster with a template from the Trello community or</p>
            <Select
              id="category"
              name="category"
              options={['popular', 'design', 'game']}
            />
          </div>
        ) : null}
        <div className={styles.boardCards}>
          {boards.map((board, index) => {
            if (category && index > 3) return
            return <BoardCard key={board.id} board={board} />
          })}
          {add && (
            <div className={styles.boardAdd} onClick={openModal}>
              Create new board
            </div>
          )}
        </div>
        {category && (
          <Link href="/templates">
            <a className={styles.boardLink}>Browse the full template gallery</a>
          </Link>
        )}

        <Modal
          isOpen={isActiveAdd}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className={styles.modal}>
            <div
              className={styles.modalWall}
              style={{
                backgroundImage:
                  modalBackground.type === 'image'
                    ? `url(${modalBackground.background})`
                    : modalBackground.background,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <input
                className={styles.modalWallInput}
                value={boardName}
                onChange={(e) => setBoardName(e.target.value)}
                type="text"
                placeholder="Add board title"
              />
              <div className={styles.modalWallClose} onClick={closeModal}>
                <Icon name="close" />
              </div>
              <button
                className={styles.modalWallButton}
                onClick={addBoardHandler}
              >
                Create Board
              </button>
            </div>
            <div className={styles.modalBackgrounds}>
              {backgrounds.map((item) => (
                <div
                  className={styles.modalBackgroundsItem}
                  style={{
                    background:
                      item.type === 'image'
                        ? `url(${item.background})`
                        : item.background,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                  key={item.id}
                  onClick={() => {
                    setModalBackground(item)
                  }}
                ></div>
              ))}
            </div>
          </div>
        </Modal>
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    backgrounds: state.boards.backgrounds,
  }
}

export default connect(mapStateToProps)(BoardsGroup)
