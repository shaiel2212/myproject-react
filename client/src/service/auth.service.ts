import axiosInstance from "./index";
import { ILoginPayload } from "../interface/User.interface";
// #1
export const auth = {
  // #2
  login: async (payload: ILoginPayload) =>
    await axiosInstance.post("/login", payload),
};
