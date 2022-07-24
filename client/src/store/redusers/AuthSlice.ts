import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../service/auth.service";
import { ILoginPayload, IUserLogin } from "./../../interface/User.interface";
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
        return err.rejectWithValue(error?.message);
      }
    }
  }
);
// #3
export interface InitialState {
  message: string | null;
  isLoading: boolean | null;

  detailsUser: IUserLogin | null;
}
// #4
const initialState: InitialState = {
  detailsUser: null,

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
