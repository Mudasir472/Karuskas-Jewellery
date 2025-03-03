import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: "idle",
    error: null,
};


export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/all-products`);
            console.log(response);

            return response.data?.allProducts;
        } catch (error) {
            console.log(error);

            return rejectWithValue(error.response?.data || "Failed to fetch products");
        }
    }
);

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        resetStatus: (state) => {
            state.status = "idle";
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state) => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(productsFetch.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload || "An error occurred";
            });
    },
});


export const { resetStatus } = productSlice.actions;
export default productSlice.reducer;