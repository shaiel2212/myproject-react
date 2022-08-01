import axiosInstance from "./index";

import { IVacation } from "../interface/Vacation.interface";


export const vacation = {
    getVacations: async () =>
        await axiosInstance.get("/vacations"),

        addVacation: async (payload: IVacation) =>
            await axiosInstance.post("/vacations", payload),
};
