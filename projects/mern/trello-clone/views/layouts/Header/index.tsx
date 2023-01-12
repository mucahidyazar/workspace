import React from 'react'
import styles from './styles.module.scss'
import NavItem from '../../components/NavItem'
import Icon from '../../components/Icon'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        <NavItem>
          <Icon name="menu" />
        </NavItem>
        <NavItem>
          <Icon name="home" />
        </NavItem>
        <NavItem>
          <Icon name="board" />
        </NavItem>
        <NavItem>
          <Icon name="search" />
        </NavItem>
      </div>
      <div className={styles.logo}>
        <Icon name="trello-logo-blue" />
      </div>
      <div className={styles.info}>
        <NavItem>
          <Icon name="plus" />
        </NavItem>
        <NavItem>
          <Icon name="info" />
        </NavItem>
        <NavItem>
          <Icon name="notification" />
        </NavItem>
        <div className={styles.infoProfile}></div>
      </div>
    </header>
  )
}

export default Header
