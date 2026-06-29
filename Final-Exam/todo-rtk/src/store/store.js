import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todo-slice.js";
console.log("aa gaya")
const store = configureStore({
  reducer: {
    task: todoReducer,
  },
});

export default store;
