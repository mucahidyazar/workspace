import { combineReducers } from 'redux';

//Reducers
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import ordersReducer from './ordersReducer';

const reducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: ordersReducer
});

export default reducers;