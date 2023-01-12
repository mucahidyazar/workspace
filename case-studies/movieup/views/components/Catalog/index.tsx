import React from 'react'
import styles from './styles.module.scss'
import Title from './Title'
import Card from './Card'
import Icon from '../../ui/Icon'

interface CatalogProps {}

const Catalog: React.FC<CatalogProps> = () => {
  return (
    <div className={styles.catalog}>
      <Title title="Popular Movies" />
      <div className={styles.cards}>
        <div className={styles.cardsOverlayLeft}></div>
        <div className={styles.cardsOverlayRight}></div>
        <div className={styles.cardsArrowLeft}>
          <Icon icon="arrow-left" />
        </div>
        <div className={styles.cardsArrowRight}>
          <Icon icon="arrow-right" />
        </div>
        <Card className={styles.card} />
        <Card className={styles.card} />
        <Card className={styles.card} />
      </div>
    </div>
  )
}

export default Catalog
