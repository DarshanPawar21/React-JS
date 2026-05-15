import { createSlice } from "@reduxjs/toolkit";

const Counterslice = createSlice({
    name:"counter",
    initialState: {
        value: 0,
    },
    reducers : {
        increment: (state)=>{state.value += 1;},
        decrement : (state)=>{
            if(state.value > 0){
                state.value -= 1;
            }
        },
    },
});

export const {increment,decrement} = Counterslice.actions;
export default Counterslice.reducer;