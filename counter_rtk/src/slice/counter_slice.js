import { createSlice } from "@reduxjs/toolkit";

// const intstate = {value: 0};

const counterslice = createSlice({
    name:"counter_1",
    initialState: { value: 0 },
    reducers:{
        increament:(s)=>{s.value++;},
        decreament:(s)=>{s.value--;},
    }, 
});
export default counterslice.reducer;
export const {increament,decreament} = counterslice.actions;