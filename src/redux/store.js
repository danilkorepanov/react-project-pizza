import { configureStore } from "@reduxjs/toolkit";
import SearchSLice from "./slices/SearchSLice";
import FilterSlice from "./slices/FilterSlice";

export const store = configureStore({
  reducer: {
    filter: FilterSlice,
    search: SearchSLice,
  },
});
