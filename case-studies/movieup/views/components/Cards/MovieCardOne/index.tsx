import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Button from '../../../ui/Button'
import styles from './styles.module.scss'
import Icon from '../../../ui/Icon'
import imdbLogo from '../../../../public/static/assets/svgs/imdb.svg'
import Link from 'next/link'
import { switchFavorite } from '../../../../redux/actions'
import { connect } from 'react-redux'

interface MovieCardOneProps {
  movie?: any
  dispatch?: any
  favorites: any
}

const MovieCardOne: React.FC<MovieCardOneProps> = ({
  movie,
  dispatch,
  favorites,
}) => {
  const [data, setData] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(
        `https://www.omdbapi.com/?i=${movie.imdbID}&type=${movie.Type}&y=${movie.Year}&plot=full&apikey=${process.env.NEXT_PUBLIC_OMDB_API}`
      )
      setData(res.data)
    }
    fetchData()
    console.log(process.env.NEXT_PUBLIC_OMDB_API)
  }, [])

  const addFavoriteHandler = () => {
    dispatch(switchFavorite(data))
  }

  useEffect(() => {
    let isThere = null
    if (favorites.length && data) {
      isThere = favorites.findIndex((movie) => movie.imdbID === data.imdbID)
    }
    if (isThere !== null && isThere !== -1) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }
  }, [favorites, data])

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img className={styles.cardImage} src={movie.Poster} alt="" />
        <div className={styles.cardHeaderFooter}>
          <div className={styles.cardGenres}>
            {data?.Genre.split(', ').map((genre) => {
              return <Button key={genre} name={genre} type="small" />
            })}
          </div>
          <div
            className={
              styles.cardIcon + ' ' + (isFavorite ? styles.cardIconActive : '')
            }
            onClick={addFavoriteHandler}
          >
            <Icon icon="heart-line" />
          </div>
        </div>
      </div>

      <Link
        href={`/detail?id=${movie.imdbID}&type=${movie.Type}&y=${movie.Year}`}
      >
        <a>
          <div className={styles.cardInfo}>
            <img src={imdbLogo} alt="" className={styles.cardInfoLogo} />{' '}
            <span className={styles.cardPoint}>
              {data ? data.imdbRating : 'N/A'}
            </span>
          </div>
          <p className={styles.cardYear}>{movie.Year}</p>
          <p className={styles.cardTitle}>{movie.Title}</p>
          <p className={styles.cardDescription}>
            {data
              ? data.Plot
              : 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'}
          </p>
        </a>
      </Link>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    favorites: state.main.favorites,
  }
}

export default connect(mapStateToProps)(MovieCardOne)
