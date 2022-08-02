import axiosInstance from "./index";

import { IVacation } from "../interface/Vacation.interface";

export const vacationService = {
  get: async () => await axiosInstance.get("/vacations"),

  add: async (payload: IVacation) =>
    await axiosInstance.post("/vacations", payload),
    // delete: async (payload: IVacation) =>   await axiosInstance.delete("/vacations"),
    // edit: async (payload: IVacation) =>   await axiosInstance.put("/vacations", payload),
};
