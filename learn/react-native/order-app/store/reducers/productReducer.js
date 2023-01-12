import PRODUCTS from '../../data/dummy-data';
import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from '../types';
import Product from '../../models/product';

const initialState = {
  avaiableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(product => (
    product.ownerId === 'u1'
  ))
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {

    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        'u1',
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price
      );
      return {
        ...state,
        avaiableProducts: state.avaiableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct)
      };
    case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        prod => prod.id === action.pid
      );
      const updatedProduct = new Product(
        action.pid,
        state.userProducts[productIndex].ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        state.userProducts[productIndex].price
      );
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;
      const availableProductIndex = state.avaiableProducts.findIndex(
        prod => prod.id === action.pid
      );
      const updatedAvailableProducts = [...state.avaiableProducts];
      updatedAvailableProducts[availableProductIndex] = updatedProduct;
      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        avaiableProducts: state.userProducts.filter((product) => (
          product.id !== action.pid
        )),
        userProducts: state.userProducts.filter((product) => (
          product.id !== action.pid
        )),
      }
    default:
      return state;
  }
}

export default productReducer;