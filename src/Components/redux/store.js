import { configureStore } from "@reduxjs/toolkit";
import articles from "./articlesSlice";

export const store = configureStore({
    reducer: {
        articles
    },
})