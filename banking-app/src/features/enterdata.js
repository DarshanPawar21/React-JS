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

export const loginManager = createAsyncThunk(
    "counter/loginManager",
    async ({ email, password }) => {
        try {
            const res = await fetch("http://localhost:3000/banking/loginmanager", {
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
    async ({ branchName, branchCity, IFSCCode, branchPhone }) => {
        try {
            const res = await fetch("http://localhost:3000/banking/addBranch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ branchName, branchCity, IFSCCode, branchPhone })
            });
            const branchdata = await res.json();
            return branchdata;
        } catch (error) {
            return console.log(error.message || "Something went wrong");
        }
    }
);

export const useradding = createAsyncThunk("adding/user", async ({ name, email, aadharNumber, phone, password, IFSCCode }) => {
    try {
        const res = await fetch("http://localhost:3000/banking/addUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                IFSCCode:IFSCCode,
                email: email,
                aadharNumber: aadharNumber,
                phone: phone,
                password: password
            })
        })
        const user_data = await res.json();
        return user_data
    } catch (error) {
        return console.log(error.message || "Something went wrong");
    }
})

export const Account_Adding = createAsyncThunk("addind/account", async ({ IFSCCode, aadharNumber, accountType, balance }) => {
    try {
        const res = await fetch("http://localhost:3000/banking/addAccount", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                IFSCCode: IFSCCode,
                aadharNumber: aadharNumber,
                accountType: accountType,
                balance: balance
            })
        })
        const data = await res.json();
        console.log(data);
        return data.result
    } catch (error) {
        return console.log(error.message || "Something went wrong");
    }
})

export const Manager_Adding = createAsyncThunk("adding/manager", async ({ name, email, aadharNumber, phone, password, IFSCCode }) => {
    try {
        const res = await fetch("http://localhost:3000/banking/addmanager", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                aadharNumber,
                phone,
                password,
                IFSCCode,
            })
        });
        const data = await res.json()
        console.log(data);
        return data.result
    } catch (err) {
        return console.log(error.message || "Something went wrong");
    }
})

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

const user_initiionstate = {
    user_data: [],
    loading: false,
    error: null,
    loginMessage: "",
}
export const user_adding_slice = createSlice({
    name: "adduser",
    initialState: user_initiionstate,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(branchadding.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(branchadding.fulfilled, (state, action) => {
                state.loading = false;
                state.user_data = action.payload;
                state.error = null;
                state.loginMessage = action.payload?.message || "Adding successful";
            })
            .addCase(branchadding.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
                state.loginMessage = "";
            });
    }
})

const acccount_initialState = {
    Account_data: [],
    loading: false,
    error: null,
    loginMessage: "",
}

export const account_adding_slice = createSlice({
    name: "account",
    initialState: acccount_initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Account_Adding.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(Account_Adding.fulfilled, (state, action) => {
                state.loading = false;
                state.Account_data = action.payload;
                state.error = null;
                state.loginMessage = action.payload?.message || "Adding successful";
            })
            .addCase(Account_Adding.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
                state.loginMessage = "";
            });
    }
})

const manager_initialState = {
    ManagerAadding_data: [],
    loading: false,
    error: null,
    loginMessage: "",
};

export const manager_addingdata_slice = createSlice({
    name: "manager",
    initialState: manager_initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Manager_Adding.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(Manager_Adding.fulfilled, (state, action) => {
                state.loading = false;
                state.Manager_data = action.payload;
                state.error = null;
                state.loginMessage = action.payload?.message || "Adding successful";
            })
            .addCase(Manager_Adding.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
                state.loginMessage = "";
            });
    }
})

const login_manager_int = {
    manager_login_data: [],
    loading: false,
    error: null,
    loginMessage: "",
    isAuthenticated: false,
    user: null,
}

export const manager_login_slice = createSlice({
    name: "loginManger",
    initialState: login_manager_int,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginManager.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.loginMessage = "";
                state.isAuthenticated = false;
            })
            .addCase(loginManager.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.manager_login_data = action.payload?.user ?? action.payload;
                state.error = null;
                state.loginMessage = action.payload?.message || "Login successful";
            })
            .addCase(loginManager.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload || action.error.message;
                state.loginMessage = "";
            });
    }
})



export const Employee_adding = createAsyncThunk("adding/employee", async ({ 
    Employee_name, Employee_email, Employee_aadharNumber, Employee_phone, Employee_password, IFSCCode }) => {
    try {
        const res = await fetch("http://localhost:3000/banking/addemployee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Employee_name,
                IFSCCode:IFSCCode,
                Employee_email,
                Employee_aadharNumber,
                Employee_phone,
                Employee_password
            })
        })
        const user_data = await res.json();
        return user_data
    } catch (error) {
        return console.log(error.message || "Something went wrong");
    }
})

const Employee_initiionstate = {
    employee_data: [],
    loading: false,
    error: null,
    loginMessage: "",
}
export const Employee_adding_slice = createSlice({
    name: "adduser",
    initialState: Employee_initiionstate,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Employee_adding.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(Employee_adding.fulfilled, (state, action) => {
                state.loading = false;
                state.employee_data = action.payload;
                state.error = null;
                state.loginMessage = action.payload?.message || "Adding successful";
            })
            .addCase(Employee_adding.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
                state.loginMessage = "";
            });
    }
})
export const addCounterSlice = CounterSlice.reducer;
export const addbranch = addbrachSlice.reducer;
export const add_user = user_adding_slice.reducer;
export const account_slice = account_adding_slice.reducer;
export const manager_slice = manager_addingdata_slice.reducer;
export const manager_login = manager_login_slice.reducer;
export const employee_adding = Employee_adding_slice.reducer;