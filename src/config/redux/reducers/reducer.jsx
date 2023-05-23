import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../user/userSlice";

export const Reducers = combineReducers({
  user: userReducer,
});
