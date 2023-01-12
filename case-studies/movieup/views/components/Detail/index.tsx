import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styles from './styles.module.scss'
import ImdbSvg from '../../../public/static/assets/svgs/imdb.svg'
import Button from '../../ui/Button'
import { switchFavorite } from '../../../redux/actions'

interface DetailProps {
  data?: any
  favorites?: any
  dispatch?: any
  className?: string
}

const Detail: React.FC<DetailProps> = ({
  data,
  className,
  dispatch,
  favorites,
}) => {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    let isThere = null
    if (favorites.length) {
      isThere = favorites.findIndex((movie) => movie.imdbID === data.imdbID)
    }
    if (isThere !== null && isThere !== -1) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }
  }, [favorites])

  const addFavoriteHandler = () => {
    dispatch(switchFavorite(data))
  }

  return (
    <div className={styles.card + ' ' + className}>
      <div className={styles.cardImage}>
        <img src={data.Poster} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.infoHeader}>
          <div className={styles.infoHeaderLeft}>
            <img src={ImdbSvg} alt="" />
            <p>{data.imdbRating}</p>
          </div>
          <div className={styles.infoHeaderRight}>
            <Button
              name="Add to Favorites"
              type={isFavorite ? '' : 'nobg'}
              onClick={addFavoriteHandler}
            />
          </div>
        </div>
        <div className={styles.infoContent}>
          <p className={styles.year}>{data.Year}</p>
          <h3 className={styles.title}>{data.Title}</h3>
          <p className={styles.description}>{data.Plot}</p>
        </div>
        <div className={styles.infoFooter}>
          {data?.Genre.split(', ').map((genre) => {
            return <Button key={genre} name={genre} type="small" />
          })}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    favorites: state.main.favorites,
  }
}

export default connect(mapStateToProps)(Detail)
