import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
};

export const CategorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {
    setActiveCategories: (state, action) => {
      state.index = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveCategories } = CategorySlice.actions;

export default CategorySlice.reducer;
