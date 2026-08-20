import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserPagination = createAsyncThunk(
    "user/fetchPagination",
    async ({ page }, { rejectWithValue }) => {
        try {
            const res = await fetch("http://localhost:3000/userpage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ page })
            });

            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message || "Something went wrong");
        }
    }
);

const paginationInitialState = {
    user_Data: [],
    totalCount: 0,
    loading: false,
    error: null,
    message: ""
};

export const userPaginationSlice = createSlice({
    name: "userPagination",
    initialState: paginationInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserPagination.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserPagination.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload.result || [];
                state.totalCount = action.payload.totalCount || 0;
                state.error = null;
                state.message = action.payload.message || "Page data fetched successfully";
            })
            .addCase(fetchUserPagination.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
                state.message = "";
            });
    }
});

export const user_pagination = userPaginationSlice.reducer;