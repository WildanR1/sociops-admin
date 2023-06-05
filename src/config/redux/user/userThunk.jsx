import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signIn = createAsyncThunk("user/signIn", async (param) => {
  try {
    const res = await axios.post(
      "https://sociops-backend-production.up.railway.app/auth/signin",
      param,
    );
    const response = await res.data;
    const access_token = await response.data.access_token;
    return access_token;
  } catch (error) {
    throw error;
  }
});
