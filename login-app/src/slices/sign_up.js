import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    name: "",
    email: "",
    phone: "",
    password: "",
  },
  users: [],
};

const signUpSlice = createSlice({
  name: "sign_up",
  initialState,
  reducers: {
    updateField(state, action) {
      const { field, value } = action.payload;
      if (field in state.form) {
        state.form[field] = value;
      }
    },
    submitForm(state) {
      state.users.push({ ...state.form });
      state.form = {
        name: "",
        email: "",
        phone: "",
        password: "",
      };
    },
    resetForm(state) {
      state.form = {
        name: "",
        email: "",
        phone: "",
        password: "",
      };
    },
  },
});

export const { updateField, submitForm, resetForm } = signUpSlice.actions;
export default signUpSlice.reducer;