import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, retrievePenggunaVolunteer } from "./userThunk";

const initialState = {
  user: {},
  penggunaVolunteer: [],
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
      })
      //#endregion retrieve user info
      //#region retrieve riwayat program fundraising
      .addCase(retrievePenggunaVolunteer.pending, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      .addCase(retrievePenggunaVolunteer.fulfilled, (state, action) => {
        return {
          ...state,
          penggunaVolunteer: action.payload,
          type: action.type,
        };
      })
      .addCase(retrievePenggunaVolunteer.rejected, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      });
    //#endregion retrieve riwayat program fundraising
  },
});

export const { actions: userAction, reducer: userReducer } = userSlice;
export const { login, logout } = userAction;

export default userReducer;
