import { createSlice } from "@reduxjs/toolkit";
import { retrieveRiwayatProgramFundraising } from "./fundraisingThunk";

const initialState = {
  riwayatProgramFundraising: [],

  type: "",
};

const fundraisingSlice = createSlice({
  name: "fundraising",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

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

export default fundraisingReducer;
