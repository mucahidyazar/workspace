import { createStore, combineReducers } from 'redux';
import mealReducer from './reducers/mealReducer';

const reducers = combineReducers({
  meals: mealReducer
});

const store = createStore(reducers);

export default store;