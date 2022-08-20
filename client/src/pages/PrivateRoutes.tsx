import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../components/Hook/ReduxHook";
import { setItem } from "../utils/localStorage";

const PrivateRoutes = () => {
  let auth = { token: false };
  return auth.token ?<Outlet /> : <Navigate to='/login'/>;
};

export default PrivateRoutes;
