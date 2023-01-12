import { combineReducers } from "redux";
import mainReducer from "../../containers/Main/reducer";

const reducers = combineReducers({
  main: mainReducer,
});

export default reducers;
