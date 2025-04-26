import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  selected: null
}

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setSelectedCategory: (state, action) => {
      state.selected = action.payload
    },
  }
});

export const { setCategories, setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;