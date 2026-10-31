import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const Auth_Admin_api = createAsyncThunk(
    'auth/admim',async({data})=>{
        try{
            const res = await fetch("",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({data})
            })
            const data_1 = await res.json();
            return data_1.result
        }catch{
            return console.log(error.message || "Something went wrong");
        }
    }
);

const Admim_initialstate = {
    loading:false,
    error:null,
    loadingMeassage:""
}
export const Auth_Admin_slice = createSlice({
    name:"Auth_Admin",
    initialState:Admim_initialstate,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(Auth_Admin_api.pending,(state)=>{
                state.loading = true;
                state.error = null;
                state.loadingMeassage = "loading";
            })
            .addCase(Auth_Admin_api.fulfilled,(state,action)=>{
                state.loading = false;
                state.error = null;
                state.loadingMeassage = action.payload?.message ||  "Successfily"
            })
            .addCase(Auth_Admin_api.pending,(state,action)=>{
                state.loading = false;
                state.error = action.payload || action.error.message;
                state.loadingMeassage = "";
            });
    }
})


export const Auth_Manager_api = createAsyncThunk(
    'auth/admim',async({data_manager})=>{
        try{
            const res = await fetch("",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({data_manager})
            })
            const data_1 = await res.json();
            return data_1.result
        }catch{
            return console.log(error.message || "Something went wrong");
        }
    }
);

export const Auth_Manager_slice = createSlice({
    name:"Auth_Admin",
    initialState:Admim_initialstate,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(Auth_Manager_api.pending,(state)=>{
                state.loading = true;
                state.error = null;
                state.loadingMeassage = "loading";
            })
            .addCase(Auth_Manager_api.fulfilled,(state,action)=>{
                state.loading = false;
                state.error = null;
                state.loadingMeassage = action.payload?.message ||  "Successfily"
            })
            .addCase(Auth_Manager_api.pending,(state,action)=>{
                state.loading = false;
                state.error = action.payload || action.error.message;
                state.loadingMeassage = "";
            });
    }
})

export const Auth_Employee_api = createAsyncThunk(
    'auth/admim',async({data_employee})=>{
        try{
            const res = await fetch("",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({data_employee})
            })
            const data_1 = await res.json();
            return data_1.result
        }catch{
            return console.log(error.message || "Something went wrong");
        }
    }
);
export const Auth_Employee_slice = createSlice({
    name:"Auth_Admin",
    initialState:Admim_initialstate,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(Auth_Employee_api.pending,(state)=>{
                state.loading = true;
                state.error = null;
                state.loadingMeassage = "loading";
            })
            .addCase(Auth_Employee_api.fulfilled,(state,action)=>{
                state.loading = false;
                state.error = null;
                state.loadingMeassage = action.payload?.message ||  "Successfily"
            })
            .addCase(Auth_Employee_api.pending,(state,action)=>{
                state.loading = false;
                state.error = action.payload || action.error.message;
                state.loadingMeassage = "";
            });
    }
})