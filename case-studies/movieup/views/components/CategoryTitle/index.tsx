import React from 'react'
import styles from './styles.module.scss'

interface CatelogTitle {
  title?: string
  text?: string
}

const CatelogTitle: React.FC<CatelogTitle> = ({ title, text }) => {
  return (
    <div className="container">
      <div className={styles.categoryTitle}>
        <span>{title}</span> {text && <span>{text}</span>}
      </div>
    </div>
  )
}

export default CatelogTitle
