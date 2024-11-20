import { createSlice } from "@reduxjs/toolkit";
import getProducts from "./thunks/getProductsThunk";
import { IProducts } from "@types";
import { getAllProducts } from "./thunks/getAllProducts";

const initialState: IProducts = {
  records: [],
  allRecords: [],
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

    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.error = null;
        state.loading = "succeeded";
        state.allRecords = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = "rejected";
        if (action.payload && typeof action.payload === "string")
          state.error = action.payload;
      });
  },
});

const { clearProducts } = productSlice.actions;

export { getProducts, clearProducts };
export default productSlice.reducer;
