import { IVacation } from "../../interface/Vacation.interface";
import {
  MODAL,
  ADD_VACATION,
  GET_VACATIONS,
  DELETE_VACATION,
} from "../actions";

interface InitialState {
  message: string;
  isOpen: boolean;
  header: string;
  vacations: IVacation[];
  isLoading: boolean;
}

const initialState: InitialState = {
  vacations: [],
  isLoading: false,
  header: "",
  message: "",
  isOpen: false,
};

export const vacationsReducer = (
  state: any = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action?.type) {
    case ADD_VACATION.ADD_VACATION_IS_LOADING: {
      return { ...state, isLoading: action?.payload };
    }
    case ADD_VACATION.ADD_VACATION_SUCCESS: {
      state.vacations.push(action?.payload);

      return { ...state };
    }
    case GET_VACATIONS.GET_VACATIONS_IS_LOADING: {
      return { ...state, isLoading: action?.payload };
    }
    case GET_VACATIONS.GET_VACATIONS_SUCCESS: {
      return { ...state, vacations: action?.payload };
    }

    case DELETE_VACATION.DELETE_VACATION_IS_LOADING: {
      return { ...state, vacations: action?.payload };
    }
    case DELETE_VACATION.DELETE_VACATION_IS_SUCCESS: {
      return { ...state, vacations: action?.payload };
    }

    default:
      return state;
  }
};
