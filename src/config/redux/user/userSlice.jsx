import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, retrievePenggunaVolunteer } from "./userThunk";
import { getUserInfo, retrieveDaftarAkunPengguna } from "./userThunk";

const initialState = {
  user: {},
  penggunaVolunteer: [],
  token: "",
  daftarAkunPengguna: [],

  typeDaftarAkunPengguna: "",
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
      })
    //#endregion retrieve riwayat program fundraising
    //#region retrieve daftar akun pengguna
      .addCase(retrieveDaftarAkunPengguna.pending, (state, action) => {
        return {
          ...state,
          typeDaftarAkunPengguna: action.type,
        };
      })
      .addCase(retrieveDaftarAkunPengguna.fulfilled, (state, action) => {
        return {
          ...state,
          daftarAkunPengguna: action.payload,
          typeDaftarAkunPengguna: action.type,
        };
      })
      .addCase(retrieveDaftarAkunPengguna.rejected, (state, action) => {
        return {
          ...state,
          typeDaftarAkunPengguna: action.type,
        };
      });
    //#endregion retrieve daftar akun pengguna
  },
});

export const { actions: userAction, reducer: userReducer } = userSlice;
export const { login, logout } = userAction;

export default userReducer;
