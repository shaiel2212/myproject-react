import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "../../service/auth.service";
import { isEmpty } from "./../../utils/_NotEmptyObject";
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
    
        return err.rejectWithValue(error?.response?.data);
      }
    }
  }
);

export const verifyToken = createAsyncThunk(
  "Send verify Token",
  async (_, err) => {
    try {
   
      const { data } = await auth.verifyToken();
  
      return data;
    } catch (error: any) {
      if (error) {
      
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
  isRegisterSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeMessage: (state) => {
      state.message = "";
    },
    logout: (state) => {
      localStorage.removeItem("jwt");
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
     
        state.isLoading = false;
        state.isRegisterSuccess = true;
        state.message = action.payload.message as string;
      })
      .addCase(registerRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action?.payload as string;
        state.isRegisterSuccess = false;
      })
      .addCase(verifyToken.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detailsUser = action.payload;
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.detailsUser = null;
        state.isLoading = false;
        state.message = action.payload as string;
      });
  },
});
export default authSlice;
export const { removeMessage, logout } = authSlice.actions;
