import axiosInstance from "./index";
import { ILoginPayload } from "../interface/User.interface";
import { IRegisterPayload } from "../interface/User.interface";

export const auth = {
  login: async (payload: ILoginPayload) =>
    await axiosInstance.post("/login", payload),

  register: async (payload: IRegisterPayload) =>
    await axiosInstance.post("/register", payload),
  verifyToken: async () => {
    return await axiosInstance.get("/verifyToken");
  },
};
