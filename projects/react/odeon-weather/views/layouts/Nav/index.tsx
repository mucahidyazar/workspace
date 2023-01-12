import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { getWeather } from '../../../redux/actions'
import { connect } from 'react-redux'

interface NavInterface {
  dispatch: any
}

const Nav: React.FC<NavInterface> = ({ dispatch }) => {
  useEffect(() => {
    dispatch(getWeather())
  }, [])

  return (
    <nav className="bg-light py-3">
      <div className={`container ${styles.navInner}`}>
        <h4>Odeon Weather</h4>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    datas: state.main.datas,
  }
}

export default connect(mapStateToProps)(Nav)
