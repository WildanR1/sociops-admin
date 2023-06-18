import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const retrieveDetailNews = createAsyncThunk(
  "news/retrieveDetailNews",
  async (param) => {
    try {
      const req = await axios.get(`${process.env.API_URL}/news/${param.id}`, {
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      });

      const res = await req.data;
      const data = await res.data;
      return data;
    } catch (error) {
      throw error;
    }
  },
);
