import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLogin: false,
    loading: false,
    error: ""
}

const authslice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signup_start: (state) => {
            state.loading = true
            state.error = ""
        },
        signup_success: (state, actions) => {
            state.loading = false
            state.user = actions.payload
            state.error = ""
        },
        signup_error: (state, actions) => {
            state.loading = false
            state.error = actions.payload
        },
        login_start: (state) => {
            state.loading = true
            state.error = ""
        },
        login_success: (state, actions) => {
            state.loading = false
            state.user = actions.payload
            state.isLogin = true
            state.error = ""
        },
        login_error: (state, actions) => {
            state.loading = false
            state.error = actions.payload
        },
        logout: (state) => {
            state.user = null
            state.isLogin = false
            state.error = ""
        },
        clear_error: (state) => {
            state.error = ""
        }
    }
})

export default authslice.reducer;
export const { signup_start, signup_success, signup_error, login_start, login_success, login_error, logout, clear_error } = authslice.actions;
