import axiosInstance from "./index";
import { ILoginPayload } from "../interface/User.interface";
export const auth = {
  login: async (payload: ILoginPayload) =>
    await axiosInstance.post("/login", payload),
};
