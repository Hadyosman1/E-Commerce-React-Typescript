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
  reducers: {
    clearProducts: (state) => {
      state.records = [];
    },
  },
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

const { clearProducts } = productSlice.actions;

export { getProducts, clearProducts };
export default productSlice.reducer;
