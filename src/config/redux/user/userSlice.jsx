import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "./userThunk";

const initialState = {
  user: {},
  token: "",

  type: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },

    logout: (state) => {
      return {
        ...state,
        token: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      //#region retrieve user info
      .addCase(getUserInfo.pending, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload,
          type: action.type,
        };
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      });
    //#endregion retrieve user info
  },
});

export const { actions: userAction, reducer: userReducer } = userSlice;
export const { login, logout } = userAction;

export default userReducer;
