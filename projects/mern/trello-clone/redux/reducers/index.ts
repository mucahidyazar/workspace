// #region Global Imports
import { combineReducers } from 'redux'
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from './home'
import { BoardsReducer } from './boards'
// #endregion Local Imports

export default combineReducers({
  home: HomeReducer,
  boards: BoardsReducer,
})
