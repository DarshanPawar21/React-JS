import { configureStore } from "@reduxjs/toolkit";
import post_api_reducer from "../slices/api.js"

const store = configureStore({
    reducer:{
        posts:post_api_reducer,
    },
});
export default store;