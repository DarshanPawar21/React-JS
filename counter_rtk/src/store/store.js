import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counter_slice.js"
// import counter from "../components/counter";
const store = configureStore({
    reducer: {
        counter_1:counterSlice
    }
});
export default store;