import { createAsyncThunk } from "@reduxjs/toolkit";
import handleThunkError from "@utils/handleThunkError";
import axios from "axios";

type TFormData = {
  email: string;
  password: string;
};

type TLoginResponse = {
  accessToken: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    id: number;
  };
};

const loginThunk = createAsyncThunk(
  "auth/loginThunk",
  async (formData: TFormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post<TLoginResponse>(`/login`, formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(handleThunkError(error));
    }
  }
);

export type { TLoginResponse };

export default loginThunk;
