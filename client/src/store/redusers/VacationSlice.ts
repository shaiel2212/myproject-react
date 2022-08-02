import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitialState } from "../../interface/iState.interface";
import { auth } from "../../service/auth.service";
import { vacationService } from "../../service/vacations.servise";
import { IVacation } from "./../../interface/Vacation.interface";

export const vacationRequest = createAsyncThunk(
  "Send Request To get Vacatio",

  async (payload: IVacation, err) => {
    try {
      const { data } = await vacationService.get();
      return data;
    } catch (error: any) {
      if (error) {
        return err.rejectWithValue(error.message);
      }
    }
  }
);
export const addVacationRequest = createAsyncThunk(
  "Send Request To Add Vacation",
  async (payload: IVacation, err) => {
    try {
      const { data } = await vacationService.add(payload);
      return data;
    } catch (error: any) {
      if (error) {
        console.log(error?.response?.data);
        return err.rejectWithValue(error?.response?.data);
      }
    }
  }
);

const initialState: InitialState = {
  detailsUser: null,
  vacation: null,
  isLoading: false,
  message: null,
  isRegisterSuccess: null,
};

const vacationSlice = createSlice({
  name: "vacation",
  initialState,
  reducers: {
    removeMessage: (state) => {
      state.message = "";
    },
  },

  extraReducers(builder) {
    builder
      .addCase(vacationRequest.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(vacationRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vacation = action.payload;
      })
      .addCase(vacationRequest.rejected, (state, action) => {
        state.detailsUser = null;
        state.isLoading = false;
        state.message = action?.payload as string;
      })
      .addCase(addVacationRequest.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addVacationRequest.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.vacation = { ...action.payload };
        state.message = action.payload.message as string;
      })
      .addCase(addVacationRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action?.payload as string;
        state.isRegisterSuccess = false;
      });
  },
});
export default vacationSlice;
export const { removeMessage } = vacationSlice.actions;
