import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo_slice"
const store = configureStore({
    reducer:{
        todo: todoReducer,
    },
})
export default store;
