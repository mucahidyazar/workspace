import React from 'react'
import styles from './styles.module.scss'
import MovieCardOne from '../../../components/Cards/MovieCardOne'

interface GroupOneProps {
  data?: any
}

const GroupOne: React.FC<GroupOneProps> = ({ data }) => {
  return (
    <div className="container">
      <div className={styles.searchResults}>
        {data.map((movie) => {
          return <MovieCardOne key={movie.imdbID} movie={movie} />
        })}
      </div>
    </div>
  )
}

export default GroupOne
