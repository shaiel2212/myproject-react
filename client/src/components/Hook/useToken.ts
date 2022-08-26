import React, { useEffect } from "react";
import axiosInstance from "../../service";
import { verifyToken } from "../../store/redusers/AuthSlice";
import { getItem } from "../../utils/localStorage";
import { useAppDispatch } from "./ReduxHook";
const jwt = getItem("jwt");
const useToken = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axiosInstance.interceptors.request.use(
      async (config) => {
        const session = JSON.parse(localStorage?.getItem("jwt")!);

        if (session) {
          config.headers = {
            ...config.headers,
            authorization: `Bearer ${session}`,
          };
        }

        return config;
      },
      (error) => Promise.reject(error)
    );
    jwt && dispatch(verifyToken());
  }, [dispatch]);
};

export default useToken;
