import { configureStore } from "@reduxjs/toolkit";
import todos_Reducer from "../slices/addtodos";
const store = configureStore({
    reducer:{
        todos: todos_Reducer,
    },
});

export default store;