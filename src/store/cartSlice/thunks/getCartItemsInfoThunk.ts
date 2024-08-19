import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "@store";
import handleThunkError from "@utils/handleThunkError";

const getCartItemsInfo = createAsyncThunk(
  "cart/getCartItemsInfo",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState, signal } = thunkAPI;
    const {
      cart: { items },
    } = getState() as RootState;

    const cartItemsIdsList = Object.keys(items);

    if (!cartItemsIdsList.length) return fulfillWithValue([]);

    try {
      const concatenatedIDs = `id=${cartItemsIdsList.join("&id=")}`;
      const res = await axios.get(`/products?${concatenatedIDs}`, {
        signal,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(handleThunkError(error));
    }
  }
);

export default getCartItemsInfo;
