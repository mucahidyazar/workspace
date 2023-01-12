import React from 'react'
import styles from './styles.module.scss'
import NavItem from '../../components/NavItem'
import Icon from '../../components/Icon'

function BoardHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.info}>
        <div className={styles.infoName}>Development</div>
        <NavItem>
          <Icon name="star" />
        </NavItem>
      </div>
      <div className={styles.settings}>
        <Icon name="board" />
        <p>Show Menu</p>
      </div>
    </div>
  )
}

export default BoardHeader
