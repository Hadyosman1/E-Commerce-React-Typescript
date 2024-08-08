import { createSlice } from "@reduxjs/toolkit";
import ICartState from "@customTypes/cartTypes/CartStateInterface";

const initialState: ICartState = {
  items: {},
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
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const {
  addToCart,
  decrementItemQuantity,
  incrementItemQuantity,
  deleteFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
