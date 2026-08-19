import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const search_getbranch_data = createAsyncThunk("search/branch", async (serachQ) => {
    try {
        const res = await fetch("http://localhost:3000/banking/searchbranch", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ search: serachQ })
        });
        const data = await res.json();
        console.log(data)
        return data
    } catch (err) {
        return console.log(err?.message || "Something went wrong");
    }
});

export const search_getUser_data = createAsyncThunk("search/users", async (serach) => {
    try {
        const res = await fetch("http://localhost:3000/banking/searchuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ search: serach })
        });
        const data = await res.json();
        console.log(data)
        return data
    } catch (err) {
        return console.log(err?.message || "Something went wrong");
    }
})

export const search_getaccount_data = createAsyncThunk("search/Account", async (serach) => {
    try {
        const res = await fetch("http://localhost:3000/banking/searchAccount", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ search: serach })
        });
        const data = await res.json();
        console.log(data)
        return data.result
    } catch (err) {
        return console.log(err?.message || "Something went wrong");
    }
})

export const search_gettransaction_data = createAsyncThunk("search/Transaction", async (serach) => {
    try {
        const res = await fetch("http://localhost:3000/banking/searchTransaction", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ search: serach })
        });
        const data = await res.json();
        console.log(data)
        return data
    } catch (err) {
        return console.log(err?.message || "Something went wrong");
    }
})

const barnch_initialState = {
    search_brachdata: [],
    loading: false,
    error: null,
    isAuthenticated: false,
    loginMessage: ""
}

export const searchbranch_Slice = createSlice({
    name: "searchbranch",
    initialState: barnch_initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(search_getbranch_data.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isAuthenticated = false;
            })
            .addCase(search_getbranch_data.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.search_brachdata = action.payload.result;
                state.error = null;
                state.loginMessage = action.payload?.message || "Adding successful";
            })
            .addCase(search_getbranch_data.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload || action.error.message;
                state.loginMessage = "";
            });
    }
})

const user_initialState = {
    search_Userdata: [],
    loading: false,
    error: null,
    isAuthenticated: false,
    loginMessage: ""
};

export const searuser_Slice = createSlice({
    name: "searchbranch",
    initialState: user_initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(search_getUser_data.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isAuthenticated = false;
            })
            .addCase(search_getUser_data.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.search_Userdata = action.payload.result;
                state.error = null;
                state.loginMessage = action.payload?.message || "Adding successful";
            })
            .addCase(search_getUser_data.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload || action.error.message;
                state.loginMessage = "";
            });
    }
});

const Account_initiaState = {
    search_Account_data: [],
    loading: false,
    error: null,
    isAuthenticated: false,
    loginMessage: ""
}
export const searAccount_Slice = createSlice({
    name: "searchbranch",
    initialState: Account_initiaState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(search_getaccount_data.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isAuthenticated = false;
            })
            .addCase(search_getaccount_data.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.search_Account_data = action.payload;
                state.error = null;
                state.loginMessage = action.payload?.message || "Adding successful";
            })
            .addCase(search_getaccount_data.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload || action.error.message;
                state.loginMessage = "";
            });
    }
});

const Transaction_initilState = {
    Search_Transaction: [],
    loading: false,
    error: null,
    isAuthenticated: false,
    loginMessage: ""
}

export const search_Transctiondata_Slice = createSlice({
    name: "searchbranch",
    initialState: Transaction_initilState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(search_gettransaction_data.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isAuthenticated = false;
            })
            .addCase(search_gettransaction_data.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.Search_Transaction = action.payload.result;
                state.error = null;
                state.loginMessage = action.payload?.message || "Adding successful";
            })
            .addCase(search_gettransaction_data.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload || action.error.message;
                state.loginMessage = "";
            });
    }
});


export const serach_branch = searchbranch_Slice.reducer;
export const search_user = searuser_Slice.reducer;
export const search_account = searAccount_Slice.reducer;
export const serach_transaction = search_Transctiondata_Slice.reducer