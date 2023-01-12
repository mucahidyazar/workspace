import Link from 'next/link'
import React from 'react'
import Button from '../../../ui/Button'
import styles from './styles.module.scss'

interface TitleProps {
  title?: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="container">
      <div className={styles.title}>
        <h3 className={styles.titleLeft}>{title}</h3>

        <Link href="/favorites">
          <a>
            <Button name="View Details" type="nobg" />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Title
