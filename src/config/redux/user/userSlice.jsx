import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "./userThunk";

const initialState = {
  user: {},
  isLogin: false,
  signInLoading: false,
  signInError: undefined,
  token: "",
  type: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, action) => {
        return {
          ...state,
          signInLoading: true,
          signInError: undefined,
          type: action.type,
        };
      })
      .addCase(signIn.fulfilled, (state, action) => {
        return {
          ...state,
          token: action.payload,
          signInLoading: false,
          signInError: undefined,
          type: action.type,
        };
      })
      .addCase(signIn.rejected, (state, action) => {
        return {
          ...state,
          signInLoading: false,
          signInError: undefined,
          type: action.type,
        };
      });
  },
});

export const { actions: userAction, reducer: userReducer } = userSlice;

export default userReducer;
