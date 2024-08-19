import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store";
import handleThunkError from "@utils/handleThunkError";
import axios from "axios";

const getWishListFullInfo = createAsyncThunk(
  "wishList/getWishListFullInfo",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState, signal } = thunkAPI;
    const {
      wishList: { items },
    } = getState() as RootState;

    if (!items.length) return fulfillWithValue([]);

    try {
      const concatenatedIDs = `id=${items.join("&id=")}`;
      const res = await axios.get(`/products?${concatenatedIDs}`, {
        signal,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(handleThunkError(error));
    }
  }
);

export default getWishListFullInfo;
