import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserInfo = createAsyncThunk(
  "user/getUserInfo",
  async (param) => {
    try {
      const res = await axios.get(`${process.env.API_URL}/auth/userinfo`, {
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

export const retrieveDaftarAkunPengguna = createAsyncThunk(
  "user/retrieveDaftarAkunPengguna",
  async (param) => {
    try {
      const res = await axios.get(`${process.env.API_URL}/users`, {
        params: {
          page: param.currentPage + 1,
          page_size: 5,
          sort: "created_at_desc",
        },
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      });
      const response = await res.data;
      const daftarAkunPengguna = await response.data;
      return daftarAkunPengguna;
    } catch (error) {
      throw error;
    }
  },
);
