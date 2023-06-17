import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../user/userSlice";
import { statisticReducer } from "../statistic/statisticSlice";

export const Reducers = combineReducers({
  user: userReducer,
  statistic: statisticReducer,
});
