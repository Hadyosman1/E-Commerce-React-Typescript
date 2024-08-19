import { TCategoriesRecords } from "@types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import handleThunkError from "@utils/handleThunkError";
import axios from "axios";

const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;

    try {
      const res = await axios.get<TCategoriesRecords[]>(`/categories`, {
        signal,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(handleThunkError(error));
    }
  }
);

export default getCategories;
