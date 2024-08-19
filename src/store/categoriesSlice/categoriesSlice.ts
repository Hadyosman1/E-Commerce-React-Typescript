import { ICategories } from "@types";
import { createSlice } from "@reduxjs/toolkit";
import getCategories from "./thunks/getCategoriesThunk";

const initialState: ICategories = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.error = null;
        state.records = action.payload;
        state.loading = "succeeded";
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = "rejected";
        if (typeof action.payload === "string" && action.payload)
          state.error = action.payload;
      });
  },
});

export { getCategories };
export default categoriesSlice.reducer;
