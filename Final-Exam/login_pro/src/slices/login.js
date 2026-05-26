import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../utils/user";

export const loginUser = createAsyncThunk("auth/login", async (loginData) => {
  const res = await axios.get(API_URL);
  const user = res.data.find((u) => u.email === loginData.email && u.password === loginData.password);
  if (!user) {
    return { isError: true, errorMsg: "Invalid Email or Password !" };
  }
  localStorage.setItem("user", JSON.stringify(user));
  return { isError: false, data: user };
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    allUsers: [],
    error: null,
    message: "",
  },
  reducers: {
    resetLogin: (state) => {
      state.error = null;
      state.message = "";
    },
    logoutUser: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.isError) {
          state.error = action.payload.errorMsg;
          state.message = "";
        } else {
          state.user = action.payload.data;
          state.message = "Login Successful!";
          state.error = null;
        }
      });
  },
});
export const { resetLogin, logoutUser } = loginSlice.actions;
export default loginSlice.reducer;