import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

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
      <Navbar
        expand="lg"
        sticky="top"
        variant="dark"
        bg="dark"
        className="App"
        key={Math.random()}
        style={{ textAlign: "left" }}
      >
        <Container>
          <Navbar.Brand
            style={{ margin: "10px", fontSize: "24px" }}
            as={Link}
            to="/"
          >
            Vacation App
          </Navbar.Brand>
        </Container>
        {routesMap.map((route: IRoute) => (
          <span key={route.linkText} style={{ margin: "5px" }}>
            <Nav.Link
              as={Link}
              key={route.linkText}
              style={{
                textDecoration: "none",
                color: "white",
                whiteSpace: "nowrap",
              }}
              to={route.path}
            >
              {route.linkText}
            </Nav.Link>
          </span>
        ))}
        <Container>
          <Nav style={{ marginLeft: "80%", color: "white" }}>
            <NavDropdown title={""}>Logout</NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        {detailsUser?.token ? (
          <>
            <Route element={<VacationCard />} path="/vacations" />
          </>
        ) : (
          <>
            <Route element={<LoginPage />} path="/login" />
            <Route element={<RegisterPage />} path="/register" />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
