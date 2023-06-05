import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
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
  },
});

export const { actions: userAction, reducer: userReducer } = userSlice;
export const { login } = userAction;

export default userReducer;
