import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLogin: false,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

const { reducer: userReducer } = userSlice;
export default userReducer;
