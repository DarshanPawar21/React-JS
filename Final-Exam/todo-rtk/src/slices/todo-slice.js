import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
    name:"todo",
    initialState:{
        todos:[],
        todo : "no",
    },
    reducers:{
        addtodo:(state,action)=>{
            state.todos.push(action.payload)
        }
    }
})
export const {addtodo} = todoslice.actions;
export default todoslice.reducer;