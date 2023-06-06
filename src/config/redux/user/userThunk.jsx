import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserInfo = createAsyncThunk(
  "user/getUserInfo",
  async (param) => {
    try {
      const res = await axios.get(`${process.env.API_URL}/userinfo`, {
        headers: {
          Authorization: `Bearer ${param.accessToken}`,
        },
      });
      const response = await res.data;
      const user = await response.data;
      return user;
    } catch (error) {
      throw error;
    }
  },
);
