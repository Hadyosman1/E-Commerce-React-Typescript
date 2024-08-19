import { TProductsRecords } from "@types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import handleThunkError from "@utils/handleThunkError";

import axios from "axios";

const getProducts = createAsyncThunk(
  "products/getProducts",
  async (cat_prefix: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;

    try {
      const res = await axios.get<TProductsRecords[]>(
        `/products?cat_prefix=${cat_prefix}`,
        {
          signal,
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(handleThunkError(error));
    }
  }
);
export default getProducts;
