import { createAsyncThunk } from "@reduxjs/toolkit";
import handleThunkError from "@utils/handleThunkError";
import axios from "axios";

type TFormData = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

const registerThunk = createAsyncThunk(
  "auth/register",
  async (formData: TFormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.post(`/register`, formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(handleThunkError(error));
    }
  }
);
export default registerThunk;
