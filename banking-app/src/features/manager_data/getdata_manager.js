import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get_employee_data } from "../getdata";

export const get_userdata_manager = createAsyncThunk(
  "getdata/userdata_manager",
  async (IFSCCode, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3000/banking/manager/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ IFSCCode }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch");

      // Backend response mein { result: [...] } aa raha hai
      return data.result || [];
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const get_user_int = {
  User_data: [],
  loading: false,
  error: null,
  loginMessage: "",
};

const get_user_manager_slice = createSlice({
  name: "User_Manager",
  initialState: get_user_int,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_userdata_manager.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_userdata_manager.fulfilled, (state, action) => {
        state.loading = false;
        state.User_data = action.payload; // Multi-user array save hoga
        state.error = null;
      })
      .addCase(get_userdata_manager.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});


export const get_accountdata_manager = createAsyncThunk(
  "getdata/accountdata_manager",
  async (IFSCCode, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3000/banking/manager/getaccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ IFSCCode }),
      });

      const data = await res.json();
      return data.result;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const get_aacount_int = {
  Account_data: [],
  loading: false,
  error: null,
  loginMessage: "",
};

const get_account_manager_slice = createSlice({
  name: "Account_Manager",
  initialState: get_aacount_int,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_accountdata_manager.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_accountdata_manager.fulfilled, (state, action) => {
        state.loading = false;
        state.Account_data = action.payload; // Multi-user array save hoga
        state.error = null;
      })
      .addCase(get_accountdata_manager.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const get_transactiondata_manager = createAsyncThunk(
  "getdata/transaction_manager",
  async (IFSCCode, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3000/banking/manager/gettransaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ IFSCCode }),
      });

      const data = await res.json();
      return data.result;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const get_transaction_int = {
  Transaction_data: [],
  loading: false,
  error: null,
  loginMessage: "",
};

const get_transaction_manager_slice = createSlice({
  name: "Account_Manager",
  initialState: get_transaction_int,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_transactiondata_manager.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_transactiondata_manager.fulfilled, (state, action) => {
        state.loading = false;
        state.Transaction_data = action.payload; // Multi-user array save hoga
        state.error = null;
      })
      .addCase(get_transactiondata_manager.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const get_employee_manager = createAsyncThunk(
  "getdata/employee_manager",
  async (IFSCCode, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3000/banking/manager/getemployee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ IFSCCode }),
      });

      const data = await res.json();
      return data.result;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const get_employee_int = {
  Employee_data: [],
  loading: false,
  error: null,
  loginMessage: "",
};

const get_employee_manager_slice = createSlice({
  name: "Account_Manager",
  initialState: get_employee_int,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_employee_manager.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_employee_manager.fulfilled, (state, action) => {
        state.loading = false;
        state.Employee_data = action.payload; // Multi-user array save hoga
        state.error = null;
      })
      .addCase(get_employee_manager.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const user_manager_data = get_user_manager_slice.reducer;
export const account_manager_data = get_account_manager_slice.reducer;
export const transaction_manager_data = get_transaction_manager_slice.reducer;
export const employee_manager_data = get_employee_manager_slice.reducer;