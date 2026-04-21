import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    todo:[]
}
const todoslice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        add_todo: (state)=>{state.todo.push("work out")},
    },
});
export default todoslice.reducer;
export const {add_todo} = todoslice.actions;