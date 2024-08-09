import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "@store/index";

const getCartItemsInfo = createAsyncThunk(
  "cart/getCartItemsInfo",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const {
      cart: { items },
    } = getState() as RootState;

    const cartItemsIdsList = Object.keys(items);

    if (!cartItemsIdsList.length) return fulfillWithValue([]);

    try {
      const concatenatedIDs = `id=${cartItemsIdsList.join("&id=")}`;
      const res = await axios.get(`/products?${concatenatedIDs}`);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Failed to fetch data..!");
      }
    }
  }
);

export default getCartItemsInfo;
