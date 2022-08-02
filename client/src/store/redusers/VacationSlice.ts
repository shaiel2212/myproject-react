import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { auth } from "../../service/auth.service";
import { vacationService } from "../../service/vacations.servise";
import { IVacation } from "./../../interface/Vacation.interface";

export const vacationRequest = createAsyncThunk(
  "Send Request To get Vacatio",

  async (_, err) => {
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
interface InitialState {
  message: string | null;
  isLoading: boolean | null;
  vacations?: IVacation[] | null;
  vacation: IVacation | null;
  showModal: boolean | null;
}
const initialState: InitialState = {
  vacations: null,
  isLoading: false,
  message: null,

  vacation: null,
  showModal: null,
};

const vacationSlice = createSlice({
  name: "vacation",
  initialState,
  reducers: {
    removeMessage: (state) => {
      state.message = "";
    },
    editVacation: (state, { payload }: PayloadAction<IVacation>) => {
      console.log({ payload });
      state.vacation = payload;
      state.showModal = true;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(vacationRequest.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(vacationRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vacations = action.payload;
      })
      .addCase(vacationRequest.rejected, (state, action) => {
        
        state.isLoading = false;
        state.message = action?.payload as string;
      })
      .addCase(addVacationRequest.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addVacationRequest.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.vacations = { ...action.payload };
        state.message = action.payload.message as string;
      })
      .addCase(addVacationRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action?.payload as string;
     
      });
  },
});
export default vacationSlice;
export const { removeMessage, editVacation } = vacationSlice.actions;
