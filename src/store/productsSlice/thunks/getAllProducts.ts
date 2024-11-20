import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProductsRecords } from "@types";
import handleThunkError from "@utils/handleThunkError";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    console.log("ok")

    try {
      const res = await axios.get<TProductsRecords[]>(`/products`, {
        signal,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(handleThunkError(error));
    }
  }
);
