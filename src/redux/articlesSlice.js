import { createSlice } from '@reduxjs/toolkit';

export const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        selectedCategory: "DECO"
    },
    reducers: {
        filterCategory:(state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.articles.selectedCategory;
export const { filterCategory } = articlesSlice.actions;
export default articlesSlice.reducer;