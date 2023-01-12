import React from 'react'
import Head from 'next/head'
import styles from './styles.module.scss'
import Nav from '../Nav'

interface MainLayoutInterface {
  title?: string
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutInterface> = ({ title, children }) => (
  <div className={styles.main}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="description" content="A site for my programming" />
      <meta charSet="UTF-8" />
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <Nav />
    <div className={styles.container}>{children}</div>
  </div>
)

export default MainLayout
