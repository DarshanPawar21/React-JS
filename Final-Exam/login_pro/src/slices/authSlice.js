import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../utils/user";

export const registerUser = createAsyncThunk("auth/reg",async (userData) => {
    const res = await axios.get(API_URL);
    const users = res.data;
    const userExists = users.find((user) => user.email === userData.email);
    if (userExists) {
      return { isError: true, errorMsg: "Email is already exists !" };
    }
    const result = await axios.post(API_URL, userData);
    return { isError: false, data: result.data };
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: "idle",
    error: null,
    message: "",
  },
  reducers: {
    resetState: (state) => {
      state.isLoading = "idle";
      state.error = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = "Loading";
        state.error = null;
        state.message = "";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        if (action.payload.isError) {
          state.isLoading = "failed";
          state.error = action.payload.errorMsg;
        } else {
          state.isLoading = "Success";
          state.user = action.payload.data;
          state.message = "Account created successfully!";
        }
      });
  },
});

export const { resetState } = authSlice.actions;
export default authSlice.reducer;