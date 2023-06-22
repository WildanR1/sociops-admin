import { createSlice } from "@reduxjs/toolkit";
import { retrieveDetailNews } from "./newsThunk";

const initialState = {
  newsDetail: {},
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addDetailNews: (state, action) => {
      return {
        ...state,
        newsDetail: action.payload,
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
      //#region retrieve detail news
      .addCase(retrieveDetailNews.pending, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      .addCase(retrieveDetailNews.fulfilled, (state, action) => {
        return {
          ...state,
          newsDetail: action.payload,
          type: action.type,
        };
      })
      .addCase(retrieveDetailNews.rejected, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      });
    //#endregion retrieve detail news
  },
});

export const { actions: newsAction, reducer: newsReducer } = newsSlice;
export const { addDetailNews } = newsAction;

export default newsReducer;
