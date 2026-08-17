import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { rejectWithValue } from "@reduxjs/toolkit";

export const getuserdata = createAsyncThunk("getdata/user", async () => {
    try {
        const res = await fetch("http://localhost:3000/banking/getusers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const userdata = await res.json();
        // console.log(userdata)
        return userdata.result
    } catch (err) {
        return rejectWithValue(err.message);
    }
})

export const getaccountdata = createAsyncThunk("getdata/aacount", async () => {
    try {
        const res = await fetch("http://localhost:3000/banking/getaccount", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const accountdata = await res.json();
        return accountdata.result
        // console.log(accountdata);
    } catch (err) {
        return rejectWithValue(err.message);
    }
});

export const gettransaction = createAsyncThunk("getdata/transaction", async () => {
    try {
        const res = await fetch("http://localhost:3000/banking/gettransaction", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const transactiondata = await res.json();
        // console.log(transactiondata);
        return transactiondata.result
    } catch (err) {
        return rejectWithValue(err.message);
    }
});

export const getbranchdata = createAsyncThunk("getdata/brench", async () => {
    try {
        const res = await fetch("http://localhost:3000/banking/getbranch", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const getbranch = await res.json();
        console.log(getbranch)
        return getbranch.result
    } catch (error) {
        return rejectWithValue(error.message);
    }
}
)

export const get_user_data = createAsyncThunk("getdata/user", async () => {
    try {
        const res = await fetch("http://localhost:3000/banking/getusers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const get_user = await res.json();
        return get_user.result
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const get_manager_data = createAsyncThunk("getdata/manager", async () => {
    try {
        const res = await fetch("http://localhost:3000/banking/getmanager", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const get_manager = await res.json();
        return get_manager.result
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

const userInitialState = {
    userdata: [] || 0,
    loading: false,
    error: null,
    loginmessage: ""
};

export const userSlice = createSlice({
    name: "userdata",
    initialState: userInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getuserdata.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.loginmessage = "";
            })
            .addCase(getuserdata.fulfilled, (state, action) => {
                state.loading = false;
                state.userdata = action.payload;
                state.error = null;
                state.loginmessage = "Fetch successfuly !";
            })
            .addCase(getuserdata.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
});

const accountInitialState = {
    accountdata: [],
    loading: false,
    error: null,
    loginmessage: ""
};
export const accountSlice = createSlice({
    name: "Account",
    initialState: accountInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getaccountdata.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.loginmessage = "Loading..."
            })
            .addCase(getaccountdata.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.accountdata = action.payload;
                state.loginmessage = "Fetch successfuly !";
            })
            .addCase(getaccountdata.rejected, (state, action) => {
                state.loading = false;
                state.error = "Something went wrong";
            });
    }
});

const transactionInitialState = {
    transactiondata: [],
    loading: false,
    error: null,
    loginmessage: ""
};
export const transactionSlice = createSlice({
    name: "transaction",
    initialState: transactionInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(gettransaction.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.loginmessage = "Loading..."
            })
            .addCase(gettransaction.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.transactiondata = action.payload;
                state.loginmessage = "Fetch successfuly !";
            })
            .addCase(gettransaction.rejected, (state, action) => {
                state.loading = false;
                state.error = "Something went wrong";
            });
    }
});

const getbrancint = {
    getbranch: [],
    loading: false,
    error: null,
    loginmessage: ""
}
export const getbrachdataSlice = createSlice({
    name: "Branch",
    initialState: getbrancint,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getbranchdata.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.loginmessage = "Loading..."
            })
            .addCase(getbranchdata.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.getbranch = action.payload;
                state.loginmessage = "Fetch successfuly !";
            })
            .addCase(getbranchdata.rejected, (state, action) => {
                state.loading = false;
                state.error = "Something went wrong";
            });
    }
});

const user_intialState = {
    user_data: [],
    loading: false,
    error: null,
    loginmessage: ""
};

export const get_user_slice = createSlice({
    name: "User",
    initialState: user_intialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(get_user_data.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.loginmessage = "Loading..."
            })
            .addCase(get_user_data.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.user_data = action.payload;
                state.loginmessage = "Fetch successfuly !";
            })
            .addCase(get_user_data.rejected, (state, action) => {
                state.loading = false;
                state.error = "Something went wrong";
            });
    }
});

const manager_initialState = {
    Manager_data: [],
    loading: false,
    error: null,
    loginmessage: ""
}
export const get_manager_slice = createSlice({
    name: "manager",
    initialState: manager_initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(get_manager_data.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.loginmessage = "Loading..."
            })
            .addCase(get_manager_data.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.Manager_data = action.payload;
                state.loginmessage = "Fetch successfuly !";
            })
            .addCase(get_manager_data.rejected, (state, action) => {
                state.loading = false;
                state.error = "Something went wrong";
            });
    }

})
export const getuserdataslice = userSlice.reducer;
export const getaccountdataslice = accountSlice.reducer;
export const gettransactionslice = transactionSlice.reducer;
export const getbranchslice = getbrachdataSlice.reducer;
export const get_userSlice = get_user_slice.reducer;
export const get_manager = get_manager_slice.reducer;
