import { configureStore } from "@reduxjs/toolkit";
import toduredurer from "../slices/todo-slice.js"

const store = configureStore({
    reducer:{
        todo:toduredurer,
    },
});
export default store;
