import { createSlice } from "@reduxjs/toolkit";
import { retrieveDetailVolunteer } from "./volunteerThunk";

const initialState = {
  volunteerDetail: {},
};

const volunteerSlice = createSlice({
  name: "volunteer",
  initialState,
  reducers: {
    addDetailVolunteer: (state, action) => {
      return {
        ...state,
        volunteerDetail: action.payload,
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
      //#region retrieve detail volunteer
      .addCase(retrieveDetailVolunteer.pending, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      .addCase(retrieveDetailVolunteer.fulfilled, (state, action) => {
        return {
          ...state,
          volunteerDetail: action.payload,
          type: action.type,
        };
      })
      .addCase(retrieveDetailVolunteer.rejected, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      });
    //#endregion retrieve detail Volunteer
  },
});

export const { actions: volunteerAction, reducer: volunteerReducer } =
  volunteerSlice;
export const { addDetailVolunteer } = volunteerAction;

export default volunteerReducer;
