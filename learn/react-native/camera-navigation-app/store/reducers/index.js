import { combineReducers } from 'redux';

import placesReducers from './placesReducer';

const reducers = combineReducers({
  places: placesReducers
});

export default reducers;