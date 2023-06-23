import { createSlice } from "@reduxjs/toolkit";
import {
  retrieveDetailFundraising,
  retrieveRiwayatProgramFundraising,
} from "./fundraisingThunk";

const initialState = {
  fundraisingDetail: {},
  riwayatProgramFundraising: [],

  type: "",
};

const fundraisingSlice = createSlice({
  name: "fundraising",
  initialState,
  reducers: {
    addDetailFundraising: (state, action) => {
      return {
        ...state,
        fundraisingDetail: action.payload,
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
      //#region retrieve detail fundraising
      .addCase(retrieveDetailFundraising.pending, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      .addCase(retrieveDetailFundraising.fulfilled, (state, action) => {
        return {
          ...state,
          fundraisingDetail: action.payload,
          type: action.type,
        };
      })
      .addCase(retrieveDetailFundraising.rejected, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      //#endregion retrieve detail Fundraising

      //#region retrieve riwayat program fundraising
      .addCase(retrieveRiwayatProgramFundraising.pending, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      .addCase(retrieveRiwayatProgramFundraising.fulfilled, (state, action) => {
        return {
          ...state,
          riwayatProgramFundraising: action.payload,
          type: action.type,
        };
      })
      .addCase(retrieveRiwayatProgramFundraising.rejected, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      });
    //#endregion retrieve riwayat program fundraising
  },
});

export const { actions: fundraisingAction, reducer: fundraisingReducer } =
  fundraisingSlice;
export const { addDetailFundraising } = fundraisingAction;

export default fundraisingReducer;
