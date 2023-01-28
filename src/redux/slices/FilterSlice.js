import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategories: 0,
  typeSort: {
    title: "популярности",
    name: "rating",
  },
};

export const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTypeSort: (state, action) => {
      state.typeSort = action.payload;
    },
    setActiveCategories: (state, action) => {
      state.activeCategories = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveCategories, setTypeSort } = FilterSlice.actions;

export default FilterSlice.reducer;
