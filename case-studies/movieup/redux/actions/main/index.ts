import Axios from 'axios'
import { SWITCH_FAVORITE, GET_FAVORITES } from '../../types'

export const getFavorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || []
  return (dispatch) => {
    dispatch({
      type: GET_FAVORITES,
      favorites,
    })
  }
}

export const switchFavorite = (data) => ({
  type: SWITCH_FAVORITE,
  data,
})
