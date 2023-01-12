import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from '../../components/Icon'

function SideMenu() {
  const { pathname } = useRouter()

  return (
    <div className={styles.side}>
      <div className={styles.sideMain}>
        <Link
          href={{
            pathname: '/boards',
          }}
        >
          <a
            className={
              styles.sideLink +
              ' ' +
              (pathname === '/boards' ? styles.sideLinkActive : '')
            }
          >
            <Icon name="board" />
            <p>Boards</p>
          </a>
        </Link>
        <Link
          href={{
            pathname: '/templates',
          }}
        >
          <a
            className={
              styles.sideLink +
              ' ' +
              (pathname === '/templates' ? styles.sideLinkActive : '')
            }
          >
            <Icon name="board" />
            <p>Templates</p>
          </a>
        </Link>
        <Link
          href={{
            pathname: '/',
          }}
        >
          <a
            className={
              styles.sideLink +
              ' ' +
              (pathname === '/' ? styles.sideLinkActive : '')
            }
          >
            <Icon name="board" />
            <p>Home</p>
          </a>
        </Link>
      </div>
      <div className={styles.teams}>
        <p className={styles.teamsHeader}>Teams</p>
        <button className={styles.teamsButton}>
          <Icon name="board" />
          <p>Create a team</p>
        </button>
      </div>
    </div>
  )
}

export default SideMenu
