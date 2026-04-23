import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    todo:[]
}
const todoslice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        add_todo: (state,actions)=>{state.todo.push(actions.payload,)},
        remove_todo: (state,actions)=>{state.todo.splice(actions.payload,1)},
        update_todo:(state,actions)=>{state.todo[actions.payload.i]=actions.payload.text}},
    },
);
export default todoslice.reducer;
export const {add_todo,remove_todo,update_todo} = todoslice.actions;