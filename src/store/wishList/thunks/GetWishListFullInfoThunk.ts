import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axios from "axios";

const getWishListFullInfo = createAsyncThunk(
  "wishList/getWishListFullInfo",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const {
      wishList: { items },
    } = getState() as RootState;

    if (!items.length) return fulfillWithValue([]);

    try {
      const concatenatedIDs = `id=${items.join("&id=")}`;
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

export default getWishListFullInfo;
