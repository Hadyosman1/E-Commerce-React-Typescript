import TCategoriesRecords from "@customTypes/categoriesTypes/categoriesRecordsType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.get<TCategoriesRecords[]>(`/categories`);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      } else {
        return rejectWithValue("failed to fetch");
      }
    }
  }
);

export default getCategories;
