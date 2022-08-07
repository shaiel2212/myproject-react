import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { auth } from "../../service/auth.service";
import { vacationService } from "../../service/vacations.servise";
import {
  IDeleteVacationResponse,
  IVacation,
} from "./../../interface/Vacation.interface";

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

export const editVacationRequest = createAsyncThunk(
  "Edit/Vacation",
  async (payload: IVacation, err) => {
    try {
      const { data } = await vacationService.edit(payload);
      return data;
    } catch (error) {
      if (error) {
        return err.rejectWithValue(error);
      }
    }
  }
);
export const deleteVacationRequest = createAsyncThunk(
  "delete/Vacation",
  async (vacation_id: string | number, err) => {
    try {
      const { data } = await vacationService.delete(vacation_id);
      return data;
    } catch (error) {
      if (error) {
        return err.rejectWithValue(error);
      }
    }
  }
);

interface InitialState {
  message: string | null;
  isLoading: boolean | null;
  vacations?: IVacation[] | null;
  vacation: IVacation | null;
  showModalForEdit: boolean | null;
  status: string; // idle // success // rejected
  showModalCreateVacation: boolean | null;
}
const initialState: InitialState = {
  vacations: null,
  isLoading: false,
  message: null,

  vacation: null,
  showModalForEdit: null,
  status: "idle",
  showModalCreateVacation: null,
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
      state.showModalForEdit = true;
    },
    toggleModalForEdit: (state, { payload }) => {
      state.showModalForEdit = payload as boolean;
    },
    toggleModalCreateVacation: (state, { payload }) => {
      state.showModalCreateVacation = payload as boolean;
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
        state.status = "success";
      })
      .addCase(vacationRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action?.payload as string;
        state.status = "rejected";
      })
      .addCase(addVacationRequest.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addVacationRequest.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.vacations = action.payload as IVacation[];
        state.message = action.payload.message as string;
        state.status = "success";
      })
      .addCase(addVacationRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action?.payload as string;
        state.status = "rejected";
      })
      .addCase(editVacationRequest.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editVacationRequest.fulfilled, (state, action) => {
        console.log(action.payload, "action.payload");

        state.isLoading = false;
        state.status = "success";
        state.vacations = action.payload as IVacation[];
      })
      .addCase(editVacationRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action?.payload as string;
        state.status = "rejected";
      })
      .addCase(deleteVacationRequest.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteVacationRequest.fulfilled, (state, action) => {
        console.log({ action }, "delete action");
        state.isLoading = false;
        state.status = "success";
        state.vacations?.filter(
          (vacation) => vacation.vacation_id !== (action.payload as string)
        );
      })
      .addCase(deleteVacationRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action?.payload as string;
        state.status = "rejected";
      });
  },
});

export default vacationSlice;
export const {
  removeMessage,
  editVacation,
  toggleModalForEdit,
  toggleModalCreateVacation,
} = vacationSlice.actions;
