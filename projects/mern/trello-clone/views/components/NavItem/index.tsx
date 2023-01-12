import React from 'react'
import styles from './styles.module.scss'

function NavItem({ children, className }) {
  return <a className={styles.navItem + ' ' + className}>{children}</a>
}

export default NavItem
