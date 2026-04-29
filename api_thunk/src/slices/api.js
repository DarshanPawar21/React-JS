import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchapi = createAsyncThunk("apiPost",async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data
});

const post_api = createSlice({
    name:"posts",
    initialState:{
        posts:[],
        status:"idle",
        error: null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchapi.pending,
            (state)=>{
                state.status ="loading";
            }
        );
        builder.addCase(fetchapi.fulfilled,
            (state,action)=>{
                state.status = "successded",
                state.posts = action.payload
            }
        );
        builder.addCase(fetchapi.rejected,
            (state,action)=>{
                state.status = "failed";
                state.error = action.error.message;
            }
        );
    },
});
export default post_api.reducer;