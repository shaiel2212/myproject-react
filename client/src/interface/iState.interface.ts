import { IUserLogin } from "./User.interface";

export interface InitialState {
  message: string | null;
  isLoading: boolean | null;
  detailsUser: IUserLogin | null;
  isRegisterSuccess:boolean | null;
}
