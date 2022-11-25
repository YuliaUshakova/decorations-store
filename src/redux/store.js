import { configureStore } from "@reduxjs/toolkit";
import articles from "./articlesSlice";
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        articles,
        cart
    },
})