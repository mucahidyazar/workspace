import { SWITCH_FAVORITE, GET_FAVORITES } from '../../types'

const INITIAL_STATE = {
  favorites: [],
}

export const MainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SWITCH_FAVORITE:
      const isThere = state.favorites.findIndex(
        (favorite) => favorite.imdbID === action.data.imdbID
      )
      let favorites
      if (isThere !== -1) {
        favorites = state.favorites.filter(
          (fav) => fav.imdbID !== action.data.imdbID
        )
        localStorage.setItem('favorites', JSON.stringify(favorites))
        return {
          ...state,
          favorites,
        }
      } else {
        favorites = [...state.favorites, action.data]
        localStorage.setItem('favorites', JSON.stringify(favorites))
        return {
          ...state,
          favorites,
        }
      }

    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      }

    default:
      return state
  }
}
