import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from '../types';

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    pid: productId
  }
}

export const createProduct = (title, description, imageUrl, price) => {
  return dispatch => {
    fetch('https://order-app-3492b.firebaseio.com/');
    dispatch({
      type: CREATE_PRODUCT,
      productData: {
        title,
        description,
        imageUrl,
        price
      }
    })

  }
}

export const updateProduct = (id, title, description, imageUrl) => {
  return {
    type: UPDATE_PRODUCT,
    pid: id,
    productData: {
      title,
      description,
      imageUrl
    }
  }
}