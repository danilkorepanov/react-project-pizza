import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
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
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setFilters: (state, action) => {
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
      state.sort = action.payload.sort;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveCategories, setTypeSort, setPage, setFilters } =
  FilterSlice.actions;

export default FilterSlice.reducer;
