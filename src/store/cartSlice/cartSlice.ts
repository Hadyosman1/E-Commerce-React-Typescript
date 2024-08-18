import { createSelector, createSlice } from "@reduxjs/toolkit";
import ICartState from "@customTypes/cartTypes/CartStateInterface";
import { RootState } from "../index";
import getCartItemsInfo from "./thunks/getCartItemsInfoThunk";

const initialState: ICartState = {
  items: {},
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    decrementItemQuantity: (state, action) => {
      const id = action.payload;
      if (state.items[id] && state.items[id] > 1) state.items[id]--;
    },
    incrementItemQuantity: (state, action) => {
      const id = action.payload;
      if (state.items[id]) state.items[id]++;
    },
    deleteFromCart: (state, action) => {
      const id = action.payload;
      delete state.items[id];
      state.productsFullInfo = state.productsFullInfo.filter(
        (el) => el.id !== id
      );
    },
    clearCart: (state) => {
      state.items = {};
      state.productsFullInfo = [];
    },
    ClearProductsFullInfoFromCart: (state) => {
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItemsInfo.pending, (state) => {
        state.error = null;
        state.loading = "pending";
      })
      .addCase(getCartItemsInfo.fulfilled, (state, action) => {
        state.productsFullInfo = action.payload;
        state.error = null;
        state.loading = "idle";
      })
      .addCase(getCartItemsInfo.rejected, (state, action) => {
        state.loading = "rejected";
        if (action.payload && typeof action.payload === "string")
          state.error = action.payload;
      });
  },
});

const calcCartItemsCount = createSelector(
  (state: RootState) => state.cart.items,
  (items) => Object.values(items).reduce((acc, curr) => acc + curr, 0)
);

export { calcCartItemsCount, getCartItemsInfo };
export const {
  addToCart,
  decrementItemQuantity,
  incrementItemQuantity,
  deleteFromCart,
  clearCart,
  ClearProductsFullInfoFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
