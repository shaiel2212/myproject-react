import axiosInstance from "./index";

import { IVacation } from "../interface/Vacation.interface";
import { AxiosResponse } from "axios";

export const vacationService = {
  get: async () => await axiosInstance.get("/vacations"),

  add: async (payload: IVacation) =>
    await axiosInstance.post("/vacations", payload),
  edit: async (payload: IVacation): Promise<AxiosResponse<IVacation[]>> =>
    await axiosInstance.put<IVacation[]>(
      `/vacations/${payload.vacation_id}`,
      payload
    ),
  delete: async (vacation_id: number | string) =>
    await axiosInstance.delete(`/vacations/${vacation_id}`),
};
