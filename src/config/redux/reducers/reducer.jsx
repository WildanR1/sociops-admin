import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../user/userSlice";
import newsReducer from "../news/newsSlice";

export const Reducers = combineReducers({
  user: userReducer,
  news: newsReducer,
});
