import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import AddVacation from "./components/Admin/Vacation/FormVacation";

import { IRoute, routes } from "./pages/routing";
import { useAppDispatch, useAppSelector } from "./components/Hook/ReduxHook";
import { setItem, getItem } from "./utils/localStorage";
import PrivateRoutes from "./pages/PrivateRoutes";
import { RegisterPage } from "./components/auth/registerPage";
import VacationCard from "./components/Vacation/VacationCard";
import { LoginPage } from "./components/auth/loginPage";
import { verifyToken } from "./store/redusers/AuthSlice";
import NavBar from "./components/Nabar/NavBar";

function App() {
  const [routesMap, setRoutesMap] = useState(routes);
  const { isLoading, detailsUser } = useAppSelector((state) => state.authSlice);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useAppDispatch();
  const jwt = getItem("jwt");
  useEffect(() => {
    console.log({ jwt });
    jwt && dispatch(verifyToken(jwt));
  }, [dispatch, jwt]);

  useEffect(() => {
    if (detailsUser) {
      setItem("jwt", detailsUser.token);
    }
  }, [detailsUser]);
  return (
    <Router>
      <NavBar />
      <Routes>
        {detailsUser?.token ? (
          <>
            <Route element={<VacationCard />} path="/vacations" />
            <Route path="*" element={<Navigate to="/vacations" replace />} />
          </>
        ) : (
          <>
            <Route element={<LoginPage />} path="/login" />
            <Route element={<RegisterPage />} path="/register" />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
