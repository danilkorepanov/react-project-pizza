import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchValue } = SearchSlice.actions;

export default SearchSlice.reducer;
