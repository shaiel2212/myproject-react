import { IUserLogin } from "./User.interface";
import { IVacation } from "./Vacation.interface";

export interface InitialState {
  message: string | null;
  isLoading: boolean | null;
  detailsUser?: IUserLogin | null;
  isRegisterSuccess: boolean | null;
  vacations?: IVacation[] | null;
  vacation: IVacation | null;
  showModal: boolean | null;
}

