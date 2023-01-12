import { combineReducers } from '@reduxjs/toolkit';
import productDetailReducer from './product-detail/slice';
import mainReducer from './main/slice';

export const rootReducer = combineReducers({
  main: mainReducer,
  productDetail: productDetailReducer
});
