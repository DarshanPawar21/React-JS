import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice.js';
import loginReducer from "../slices/login.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,   
    login: loginReducer, 
  },
});