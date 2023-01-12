import { GET_PRODUCTS, SET_PRODUCTS } from '../../types'

const INITIAL_STATE = {
  products: [],
}

export const MainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.data,
      }

    case SET_PRODUCTS:
      return {
        ...state,
        products: action.data,
      }

    default:
      return state
  }
}
