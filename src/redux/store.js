import { configureStore } from "@reduxjs/toolkit";
import PageSlice from "./slices/PageSlice";
import SearchSLice from "./slices/SearchSLice";
import FilterSlice from "./slices/FilterSlice";

export const store = configureStore({
  reducer: {
    filter: FilterSlice,
    page: PageSlice,
    search: SearchSLice,
  },
});
