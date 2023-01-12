import React from 'react'
import Head from 'next/head'
import Header from '../Header'
import styles from './styles.module.scss'

interface IProps {
  title?: string
  className?: string
  children: React.ReactNode
}

const MainLayout: React.FC<IProps> = ({ title, className, children }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div className={styles.container + ' ' + className}>{children}</div>
  </React.Fragment>
)

export default MainLayout
