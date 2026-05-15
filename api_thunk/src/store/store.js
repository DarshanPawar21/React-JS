import { configureStore } from "@reduxjs/toolkit";
import counterEducer from "../slices/api.js"

const store = configureStore({
    reducer:{
        counter : counterEducer,
    },
});

export default store;