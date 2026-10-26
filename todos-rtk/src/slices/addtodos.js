import { createSlice } from "@reduxjs/toolkit";

const add_todo_int = {
    items:[],
    error : null,
};

const add_todo_slice = createSlice({
    name:"add_todo",
    initialState : add_todo_int,
    reducers:{
        add_todo:(state,action) =>{
            state.items.push(action.payload);
        }
    }
})

export const {add_todo} = add_todo_slice.actions;
export default add_todo_slice.reducer;