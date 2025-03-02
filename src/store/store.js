import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../features/auth/authSlice';
import authReducer from "./auth/authSlice"
import cartReducer from "./cart/cartSlice"
import productReducer from "./product/productSlice"
export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        products: productReducer
    },
});