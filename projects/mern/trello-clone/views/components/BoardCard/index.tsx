import React from 'react'
import styles from './styles.module.scss'
import { url } from 'inspector'
import Link from 'next/link'

function BoardCard({ board }) {
  return (
    <Link href={`/boards/${board.id}`}>
      <a
        className={styles.boardCard}
        style={{
          backgroundImage: `url(${board.background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {board.type !== 'personal' && (
          <p className={styles.boardCardType}>{board.type}</p>
        )}
        <p className={styles.boardCardName}>{board.name}</p>
      </a>
    </Link>
  )
}

export default BoardCard
