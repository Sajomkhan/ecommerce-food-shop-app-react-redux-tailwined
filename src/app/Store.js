import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/carts/CartSlice.js";

const Store = configureStore({
    reducer: {
        cart: CartSlice,
    }
});

export default Store;