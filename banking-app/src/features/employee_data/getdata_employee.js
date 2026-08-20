import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

const createEmployeeScopedThunk = (type, endpoint) =>
  createAsyncThunk(type, async (payload, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:3000/banking/employee/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buildScopedBody(payload)),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch");

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  });

export const get_userdata_employee = createEmployeeScopedThunk(
  "getdata/userdata_employee",
  "getuser"
);

export const get_accountdata_employee = createEmployeeScopedThunk(
  "getdata/accountdata_employee",
  "getaccount"
);

export const get_transactiondata_employee = createEmployeeScopedThunk(
  "getdata/transaction_employee",
  "gettransaction"
);

const buildEmployeeSlice = (name, dataKey, thunk) =>
  createSlice({
    name,
    initialState: {
      [dataKey]: [],
      pagination: null,
      loading: false,
      error: null,
      loginMessage: "",
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(thunk.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(thunk.fulfilled, (state, action) => {
          state.loading = false;
          state[dataKey] = getResult(action.payload);
          state.pagination = getPagination(action.payload);
          state.error = null;
        })
        .addCase(thunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || action.error.message;
        });
    },
  });

const get_user_employee_slice = buildEmployeeSlice(
  "User_Employee",
  "User_data",
  get_userdata_employee
);

const get_account_employee_slice = buildEmployeeSlice(
  "Account_Employee",
  "Account_data",
  get_accountdata_employee
);

const get_transaction_employee_slice = buildEmployeeSlice(
  "Transaction_Employee",
  "Transaction_data",
  get_transactiondata_employee
);

export const user_employee_data = get_user_employee_slice.reducer;
export const account_employee_data = get_account_employee_slice.reducer;
export const transaction_employee_data = get_transaction_employee_slice.reducer;
