import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../service/auth.service";
import { ILoginPayload, IUserLogin } from "./../../interface/User.interface";

export const loginRequest = createAsyncThunk(
  "Send Request Login",
  async (payload: ILoginPayload, err) => {
    try {
      const { data } = await auth.login(payload);
      return data;
    } catch (error: any) {
      if (error) {
        return err.rejectWithValue(error?.message);
      }
    }
  }
);

export interface InitialState {
  message: string | null;
  isLoading: boolean | null;

  detailsUser: IUserLogin | null;
}

const initialState: InitialState = {
  detailsUser: null,

  isLoading: false,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
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
      });
  },
});
export default authSlice;
