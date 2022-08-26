import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { useAppSelector } from "./components/Hook/ReduxHook";
import { setItem, getItem } from "./utils/localStorage";

import { RegisterPage } from "./components/auth/registerPage";
import VacationCard from "./components/Vacation/VacationCard";
import { LoginPage } from "./components/auth/loginPage";

import NavBar from "./components/Nabar/NavBar";

import useToken from "./components/Hook/useToken";
import { WithLoading } from "./components/UI/loadingComponent";

function App() {
  const { isLoading, detailsUser } = useAppSelector((state) => state.authSlice);
  useToken();
  useEffect(() => {
    if (detailsUser) {
      setItem("jwt", detailsUser.token);
    }
  }, [detailsUser]);
  return (
    <WithLoading isLoading={isLoading!}>
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
    </WithLoading>
  );
}

export default App;
