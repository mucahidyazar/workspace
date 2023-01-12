import { connect } from 'react-redux'
import styles from './styles.module.scss'
import { useState } from 'react'
import { getWeather } from '../../../redux/actions'

interface HeaderInterface {
  dispatch: any
}

const Header: React.FC<HeaderInterface> = ({ dispatch }) => {
  const [city, setCity] = useState('')

  const getWeatherHandler = () => {
    if (city !== '') {
      dispatch(getWeather(city))
      setCity('')
    }
  }

  return (
    <div className="row py-5">
      <div className="col-md-8">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => {
              setCity(e.target.value)
            }}
          />
        </div>
      </div>

      <div className="col-md-4">
        <button
          className={`btn btn-primary ${styles.button}`}
          onClick={getWeatherHandler}
        >
          Search
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.main.products,
  }
}

export default connect(mapStateToProps)(Header)
