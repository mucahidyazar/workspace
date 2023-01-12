import Axios from "axios";
import { GET_PRODUCTS, SET_FILTERS, ADD_BASKET } from "../../types";

export const getProducts = () => {
  return async (dispatch) => {
    const { data } = await Axios.get("https://fakestoreapi.com/products");

    dispatch({
      type: GET_PRODUCTS,
      data,
    });
  };
};

export const setFilters = (filters) => {
  return {
    type: SET_FILTERS,
    filters,
  };
};

export const addBasket = (item) => {
  return {
    type: ADD_BASKET,
    item,
  };
};
