import * as actionTypes from '../actionTypes';

export const toggleFavorite = (id) => {
  return {
    type: actionTypes.TOGGLE_FAVORITE,
    mealId: id
  }
}

export const setFilters = filterSettings => {
  return {
    type: actionTypes.SET_FILTERS,
    filters: filterSettings
  }
}