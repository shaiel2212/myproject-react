import { IRegiterPayload, IUserLogin } from "./User.interface";


export interface InitialState {
    message: string | null;
    isLoading: boolean | null;
    loginState: IUserLogin | null;
    registerState: IRegiterPayload | null;
  
  }