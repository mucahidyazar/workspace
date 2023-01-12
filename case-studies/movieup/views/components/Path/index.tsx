import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

interface PathProps {
  path?: string
  className?: string
}

const Path: React.FC<PathProps> = ({ path, className }) => {
  return (
    <div className={styles.pathContainer + ' ' + className}>
      <div className="container">
        <div className={styles.path}>
          <Link href="/">
            <a>
              <span>Home</span> <span>/</span>{' '}
            </a>
          </Link>
          <span>{path ? path : 'Search results'}</span>
        </div>
      </div>
    </div>
  )
}

export default Path
