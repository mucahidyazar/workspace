import { combineReducers } from 'redux';
import mainReducer from './main';

const reducers = combineReducers({
    main: mainReducer
});

export default reducers;