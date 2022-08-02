import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "../../service/auth.service";
import {
  ILoginPayload,
  IUserLogin,
  IRegisterPayload,
} from "./../../interface/User.interface";

export const loginRequest = createAsyncThunk(
  "Send Request Login",

  async (payload: ILoginPayload, err) => {
    try {
      const { data } = await auth.login(payload);
      return data;
    } catch (error: any) {
      if (error) {
        return err.rejectWithValue(error.message);
      }
    }
  }
);
export const registerRequest = createAsyncThunk(
  "Send Request Register",
  async (payload: IRegisterPayload, err) => {
    try {
      const { data } = await auth.register(payload);
      return data;
    } catch (error: any) {
      if (error) {
        console.log(error?.response?.data);
        return err.rejectWithValue(error?.response?.data);
      }
    }
  }
);

interface InitialState {
  message: string | null;
  isLoading: boolean | null;
  detailsUser?: IUserLogin | null;
  isRegisterSuccess: boolean | null;
}

const initialState: InitialState = {
  detailsUser: null,

  isLoading: false,
  message: null,
  isRegisterSuccess: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeMessage: (state) => {
      state.message = "";
    },
    logout: (state) => {
      state.detailsUser = null;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(loginRequest.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detailsUser = action.payload;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.detailsUser = null;
        state.isLoading = false;
        state.message = action.payload as string;
      })
      .addCase(registerRequest.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerRequest.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.isRegisterSuccess = true;
        state.message = action.payload.message as string;
      })
      .addCase(registerRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action?.payload as string;
        state.isRegisterSuccess = false;
      });
  },
});
export default authSlice;
export const { removeMessage, logout } = authSlice.actions;
