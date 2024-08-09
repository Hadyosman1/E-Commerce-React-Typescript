import TProductsRecords from "@customTypes/productsTypes/productsRecordsType";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const getProducts = createAsyncThunk(
  "products/getProducts",
  async (cat_prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.get<TProductsRecords[]>(
        `/products?cat_prefix=${cat_prefix}`
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Failed to fetch!");
      }
    }
  }
);
export default getProducts;
