import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../user/userSlice";
import { statisticReducer } from "../statistic/statisticSlice";
import newsReducer from "../news/newsSlice";
import volunteerReducer from "../volunteer/volunteerSlice";

export const Reducers = combineReducers({
  user: userReducer,
  statistic: statisticReducer,
  news: newsReducer,
  volunteer: volunteerReducer,
});
