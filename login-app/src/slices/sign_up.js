import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const sign_up = createSlice({
  name: "sign_up",
  initialState,
  reducers: {
    pushForm: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { pushForm } = sign_up.actions;
export default sign_up.reducer;