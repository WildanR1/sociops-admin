import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signIn = createAsyncThunk("user/signIn", async (param) => {
  const res = await axios.post(
    "https://sociops-backend-production.up.railway.app/auth/signin",
    param,
  );
  const response = res.data;
  const access_token = response.data.access_token;
  return access_token;
});
