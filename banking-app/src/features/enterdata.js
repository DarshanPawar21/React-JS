import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const base = "mongodb://darshan-dev:ZIDAynLTg9H5qa5K@ac-mhn9quu-shard-00-00.8ja7u8v.mongodb.net:27017,ac-mhn9quu-shard-00-01.8ja7u8v.mongodb.net:27017,ac-mhn9quu-shard-00-02.8ja7u8v.mongodb.net:27017/Banking?ssl=true&replicaSet=atlas-js5qif-shard-0&authSource=admin&appName=Cluster0"
// export const loginAdmin = createAsyncThunk(
//     "counter/loginAdmin",
//     async ({ email, password }, { rejectWithValue }) => {
//         try {
//             const response = await fetch(`${base}/loginadmin`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ email, password }),
//                 credentials: "include",
//             });
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             return rejectWithValue(error.message || "Something went wrong");
//         }
//     }
// );

export const loginAdmin = createAsyncThunk(
    "counter/loginAdmin",
    async ({ email, password }) => {
        try {
            const res = await fetch("http://localhost:3000/banking/loginadmin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            return data;
        } catch (error) {
            return console.log(error.message || "Something went wrong");
        }
    }
);

export const branchadding = createAsyncThunk(
    "adding/branch",
    async ({branchName,branchCity,IFSCCode,branchPhone}) => {
        try {
            const res = await fetch("http://localhost:3000/banking/addBranch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({branchName, branchCity, IFSCCode, branchPhone})
            });
            const branchdata = await res.json();
            return branchdata;
        } catch (error) {
            return console.log(error.message || "Something went wrong");
        }
    }
)
const initialState = {
    data: [],
    loading: false,
    error: null,
    loginMessage: "",
    isAuthenticated: false,
    user: null,
};

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.loginMessage = "";
                state.isAuthenticated = false;
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload?.user ?? action.payload;
                state.error = null;
                state.loginMessage = action.payload?.message || "Login successful";
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload || action.error.message;
                state.loginMessage = "";
            });
    }
});

const brachint = {
    brachdata: null,
    loading: false,
    error: null,
    isAuthenticated: false,
    loginMessage: ""
};
export const addbrachSlice = createSlice({
    name: "addbranch",
    initialState: brachint,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(branchadding.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isAuthenticated = false;
            })
            .addCase(branchadding.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.brachdata = action.payload;
                state.error = null;
                state.loginMessage = action.payload?.message || "Adding successful";
            })
            .addCase(branchadding.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload || action.error.message;
                state.loginMessage = "";
            });
    }
})
export const addCounterSlice = CounterSlice.reducer;
export const addbranch = addbrachSlice.reducer;