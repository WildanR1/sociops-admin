import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const retrieveDetailFundraising = createAsyncThunk(
  "Fundraising/retrieveDetailFundraising",
  async (param) => {
    try {
      const req = await axios.get(
        `${process.env.API_URL}/campaigns/${param.id}`,
        {
          headers: {
            Authorization: `Bearer ${param.token}`,
          },
        },
      );

      const res = await req.data;
      const data = await res.data;
      return data;
    } catch (error) {
      throw error;
    }
  },
);


export const retrieveRiwayatProgramFundraising = createAsyncThunk(
  "fundraising/retrieveRiwayatProgramFundraising",
  async (param) => {
    try {
      const response = await axios.get(`${process.env.API_URL}/campaigns`, {
        params: {
          page: param.currentPage + 1,
          page_size: 5,
          type: "FUNDRAISING",
          status: "ACCEPTED,REJECTED",
          sort: "created_at_desc",
        },
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      });
      const res = response.data;
      const data = res.data;

      return data;
    } catch (error) {
      throw error;
    }
  },
);
