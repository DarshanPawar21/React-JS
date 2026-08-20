import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get_employee_data } from "../getdata";

const buildScopedBody = (payload) => {
  if (payload && typeof payload === "object") {
    return {
      IFSCCode: payload.IFSCCode,
      ...(payload.page ? { page: payload.page } : {}),
      ...(payload.limit ? { limit: payload.limit } : {})
    };
  }

  return { IFSCCode: payload };
};

const getResult = (payload) => payload?.result || payload || [];
const getPagination = (payload) => payload?.pagination || null;

export const get_userdata_manager = createAsyncThunk(
  "getdata/userdata_manager",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3000/banking/manager/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buildScopedBody(payload)),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch");

      // Backend response mein { result: [...] } aa raha hai
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const get_user_int = {
  User_data: [],
  pagination: null,
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
        state.User_data = getResult(action.payload); // Multi-user array save hoga
        state.pagination = getPagination(action.payload);
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
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3000/banking/manager/getaccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buildScopedBody(payload)),
      });

      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const get_aacount_int = {
  Account_data: [],
  pagination: null,
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
        state.Account_data = getResult(action.payload); // Multi-user array save hoga
        state.pagination = getPagination(action.payload);
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
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3000/banking/manager/gettransaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buildScopedBody(payload)),
      });

      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const get_transaction_int = {
  Transaction_data: [],
  pagination: null,
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
        state.Transaction_data = getResult(action.payload); // Multi-user array save hoga
        state.pagination = getPagination(action.payload);
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
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3000/banking/manager/getemployee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buildScopedBody(payload)),
      });

      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const get_employee_int = {
  Employee_data: [],
  pagination: null,
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
        state.Employee_data = getResult(action.payload); // Multi-user array save hoga
        state.pagination = getPagination(action.payload);
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
