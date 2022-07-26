import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitialState } from "../../interface/iState.interface";
import { auth } from "../../service/auth.service";
import { ILoginPayload, IUserLogin, IRegiterPayload } from "./../../interface/User.interface";
// #8
export const loginRequest = createAsyncThunk(
  // #9
  "Send Request Login",
  // #10
  async (payload: ILoginPayload, err) => {
    try {
      // #11
      const { data } = await auth.login(payload);
      return data;
    } catch (error: any) {
      if (error) {
        // #12
        return err.rejectWithValue(error.message);
      }
    }
  }
);
export const registerRequest = createAsyncThunk(
  "Send Request Register",
  async (payload: IRegiterPayload, err) => {
    try {
      const { data } = await auth.register(payload);
      return data;
    } catch (error: any) {
      if (error) {
          return err.rejectWithValue(error.message);
      }
    }
  }
);

// #3

// #4
const initialState: InitialState = {
  loginState: null,
  registerState: null,
  isLoading: false,
  message: null,
};
// #5
const authSlice = createSlice({
  // #6
  name: "auth",
  initialState,
  reducers: {},
  // #7
  extraReducers(builder) {
    builder
      .addCase(loginRequest.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loginState = action.payload;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.loginState = null;
        state.isLoading = false;
        state.message = action.payload as string;
      })
      .addCase(registerRequest.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(registerRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loginState = action.payload;
      })
      .addCase(registerRequest.rejected, (state, action) => {
        state.loginState = null;
        state.isLoading = false;
        state.message = action.payload as string;
      })
      ;

  },
});
export default authSlice;
