import { configureStore } from "@reduxjs/toolkit";
import { Auth_Admin_slice,Auth_Manager_slice,Auth_Employee_slice } from "../slices/admin";


const store = configureStore({
    reducer:{
        auth_Admin : Auth_Admin_slice,
        auth_Manager:Auth_Manager_slice,
        auth_Employee:Auth_Employee_slice
    }
});
export default store;