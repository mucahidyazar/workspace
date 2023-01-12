// #region Global Imports
import { combineReducers } from 'redux'
// #endregion Global Imports

// #region Local Imports
import { MainReducer } from './main'
// #endregion Local Imports

export default combineReducers({
  main: MainReducer,
})
