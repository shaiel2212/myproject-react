import { AUTHACTIONS } from "../actions";
import { getTokenLS, setTokenLS } from "./helpers/auth";

export interface InitialState {
  token: undefined | string;
  isLoading: boolean;
  userName: string | null;
}

const initialState:InitialState = {
  token: undefined,
  isLoading: false,
  userName: "",
};

export const authReducer = (
  state: InitialState = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case AUTHACTIONS.LOGIN_IS_LOADING: {
      return { ...state, isLoading: action?.payload };
    }
    case AUTHACTIONS.LOGIN_SUCCESS: {
      setTokenLS(action?.payload?.data.token);
      return {
        ...state,
        token: action?.payload?.data.token,
        userName: action?.payload?.data.userName,
      };
    }
    case AUTHACTIONS.LOGIN_INVISIBLE: {
      console.log(action?.payload);
      return { ...state, loginInvisible: action?.payload };
    }
    case AUTHACTIONS.REGISTER.REGISTER_IS_LOADING: {
      console.log(action?.payload);
      return { ...state, isLoading: action?.payload };
    }
    case AUTHACTIONS.REGISTER.REGISTER_SUCCESS: {
      console.log(action?.payload);
      return { ...state };
    }
    default:
      return state;
  }
};
