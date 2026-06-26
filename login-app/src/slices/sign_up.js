import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

export const pushForm = createAsyncThunk(
  "sign_up/pushForm",
  async (formData) => {
    const response = await axios.post("http://localhost:3000/users", formData);
    return response.data;
  }
);

const sign_up = createSlice({
  name: "sign_up",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(pushForm.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(pushForm.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users.push(action.payload);
      })
      .addCase(pushForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default sign_up.reducer;