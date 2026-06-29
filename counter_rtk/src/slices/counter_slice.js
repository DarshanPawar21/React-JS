import { createSlice } from "@reduxjs/toolkit";

const state = {value=0};
const counterslice = createSlice({
    name:"counter",
    state,
    reducers:{
        increament:(state)=>{state.value ++},
        decreament:(state)=>{state.value --},
    }
});
export default counterslice.reducer;