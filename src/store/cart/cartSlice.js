import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Helper function to update local storage
const updateLocalStorage = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            // returns -1 if not in cartItems
            const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);

            if (itemIndex >= 0) {
                // Item already exists in cart, increase quantity
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success(`${action.payload.name} quantity increased`);
            } else {
                // Item doesn't exist, add it to cart
                const tempItem = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempItem);
                toast.success(`${action.payload.name} added to cart`);
            }

            updateLocalStorage(state.cartItems); // Update local storage
            state.cartTotalQuantity = state.cartItems.reduce((total, item) => total + item.cartQuantity, 0);
            state.cartTotalAmount = state.cartItems.reduce((total, item) => total + item.currPrice * item.cartQuantity, 0);
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
            toast.success(`${action.payload.name} removed from cart`);
            updateLocalStorage(state.cartItems); // Update local storage
            state.cartTotalQuantity = state.cartItems.reduce((total, item) => total + item.cartQuantity, 0);
            state.cartTotalAmount = state.cartItems.reduce((total, item) => total + item.currPrice * item.cartQuantity, 0);
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                // Decrease quantity
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.success(`${action.payload.name} quantity decreased`);
            } else {
                // Remove item if quantity is 1
                state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
                toast.success(`${action.payload.name} removed from cart`);
            }

            updateLocalStorage(state.cartItems); 
            state.cartTotalQuantity = state.cartItems.reduce((total, item) => total + item.cartQuantity, 0);
            state.cartTotalAmount = state.cartItems.reduce((total, item) => total + item.currPrice * item.cartQuantity, 0);
        },
        clearCart(state) {
            state.cartItems = [];
            toast.success("Cart cleared");
            updateLocalStorage(state.cartItems); 
            state.cartTotalQuantity = 0;
            state.cartTotalAmount = 0;
        },
        getTotal(state) {
            const { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { currPrice = 0, cartQuantity = 0 } = cartItem;
                    const itemTotal = currPrice * cartQuantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;
                    return cartTotal;
                },
                { total: 0, quantity: 0 }
            );

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotal } = cartSlice.actions;
export default cartSlice.reducer;