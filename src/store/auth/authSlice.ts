import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "@types";
import registerThunk from "./thunks/registerThunk";
import loginThunk, { TLoginResponse } from "./thunks/loginThunk";

type TAuthState = {
  loading: TLoading;
  error: null | string;
  accessToken: TLoginResponse["accessToken"];
  user: TLoginResponse["user"] | null;
};

const initialState: TAuthState = {
  loading: "idle",
  error: null,
  accessToken: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetLoadingAndError: (state) => {
      state.loading = "idle";
      state.error = null;
    },
    logOut: (state) => {
      state.accessToken = "";
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state) => {
        state.loading = "succeeded";
        state.error = null;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.payload as string;
      });
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.error = null;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.payload as string;
      });
  },
});

export const { resetLoadingAndError, logOut } = authSlice.actions;

export default authSlice.reducer;
