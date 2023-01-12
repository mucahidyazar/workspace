import React from 'react'
import styles from './styles.module.scss'
import ImdbSvg from '../../../../public/static/assets/svgs/imdb.svg'
import Button from '../../../ui/Button'
import Link from 'next/link'

interface CatalogCardProps {
  className?: string
}

const CatalogCard: React.FC<CatalogCardProps> = ({ className }) => {
  return (
    <div className={styles.card + ' ' + className}>
      <div className={styles.cardImage}>
        <img src="https://source.unsplash.com/random/270x386" alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.infoHeader}>
          <div className={styles.infoHeaderLeft}>
            <img src={ImdbSvg} alt="" />
            <p>8.8</p>
          </div>
          <div className={styles.infoHeaderRight}>
            <Button name="Action" type="small" />
            <Button name="Biography" type="small" />
          </div>
        </div>
        <div className={styles.infoContent}>
          <p className={styles.year}>2019</p>
          <h3 className={styles.title}>The Godfather</h3>
          <p className={styles.description}>
            The aging patriarch of an organized crime dynasty transfers control
            of his clandestine empire to his reluctant son.
          </p>
        </div>
        <div className={styles.infoFooter}>
          <Button name="Add to Favorites" type="nobg" />
          <Link href="/detail">
            <a>
              <Button name="View Details" type="nobg" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CatalogCard
