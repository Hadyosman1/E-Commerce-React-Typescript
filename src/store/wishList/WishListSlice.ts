import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";
import getWishListFullInfo from "./thunks/GetWishListFullInfoThunk";
import TLoading from "@customTypes/globalTypes/loadingType";
import TProductsRecords from "@customTypes/productsTypes/productsRecordsType";

type TWishListState = {
  items: number[];
  loading: TLoading;
  productsFullInfo: TProductsRecords[];
  error: null | string;
};

const initialState: TWishListState = {
  items: [],
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      if (!state.items.includes(action.payload))
        state.items.push(action.payload);
    },
    deleteFromWishList: (state, action) => {
      state.items = state.items.filter((item) => item != action.payload);
    },
    clearWishListProductsFullInfo: (state) => {
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWishListFullInfo.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getWishListFullInfo.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.productsFullInfo = action.payload;
        state.error = null;
      })
      .addCase(getWishListFullInfo.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.payload as string;
      });
  },
});

export const calcWishListQuantity = createSelector(
  (state: RootState) => state.wishList.items,
  (items) => items.length
);

export const {
  addToWishList,
  deleteFromWishList,
  clearWishListProductsFullInfo,
} = wishListSlice.actions;

export default wishListSlice.reducer;
