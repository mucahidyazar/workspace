import React from 'react'
import styles from './styles.module.scss'
import SearchBox from '../../components/SearchBox'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerOverlay}>
        <div className="container">
          <div className={styles.headerContent}>
            <h2>Welcome to MovieUP</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
      </div>
      <SearchBox className={styles.search} />
    </div>
  )
}

export default Header
