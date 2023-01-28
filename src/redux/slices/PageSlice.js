import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const PageSlice = createSlice({
  name: "Page",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPage } = PageSlice.actions;

export default PageSlice.reducer;
