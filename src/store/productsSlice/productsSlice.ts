import { createSlice } from "@reduxjs/toolkit";
import getProducts from "./thunks/getProductsThunk";
import IProducts from "@customTypes/productsTypes/productsStateInterface";

const initialState: IProducts = {
  records: [],
  loading: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.error = null;
        state.loading = "succeeded";
        state.records = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = "rejected";
        if (action.payload && typeof action.payload === "string")
          state.error = action.payload;
      });
  },
});
export { getProducts };
export default productSlice.reducer;
