import Axios from 'axios'
import { GET_PRODUCTS, SET_PRODUCTS } from '../../types'

export const setProducts = (data) => ({
  type: SET_PRODUCTS,
  data,
})

export const getProducts = () => {
  return async (dispatch) => {
    const { data } = await Axios.get('https://fakestoreapi.com/products')

    dispatch({
      type: GET_PRODUCTS,
      data,
    })
  }
}
