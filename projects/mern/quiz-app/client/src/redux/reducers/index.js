import { combineReducers } from "redux";
import { common } from "./common";
import { create } from "./create";
import { quiz } from "./quiz";
import { user } from "./user";

export const reducers = combineReducers({
  common,
  create,
  quiz,
  user,
});
