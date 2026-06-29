import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addTodoAsync = createAsyncThunk(
    "todo/addTodoAsync",
    async (newTodoTitle) => {

        const response = await axios.post("http://localhost:3000/todos", {
            title: newTodoTitle,
            //   completed: false
        });
        return response.data;
    }
);

export const deletetodoasync = createAsyncThunk(
    "todo/deletetodoasync",
    async (todoId) => {
        await axios.delete(`http://localhost:3000/todos/${todoId}`);
        return todoId;
    }
);

const todoslice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
        todo: "",
        loading:false,
    },
    reducers: {
        addtodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deletetodo:(state,action)=>{
            state.todos.splice(action.payload,1);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addTodoAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(addTodoAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.todos.push(action.payload);
            })
            .addCase(addTodoAsync.rejected, (state) => {
                state.loading = false;
                alert("ડેટા સેવ કરવામાં કંઈક ભૂલ થઈ!");
            });
    }
})
export const { addtodo,deletetodo } = todoslice.actions;
export default todoslice.reducer;
