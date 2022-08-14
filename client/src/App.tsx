import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import { LoginPage } from "./components/auth/loginPage";
import { RegisterPage } from "./components/auth/registerPage";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import AddVacation from "./components/Admin/Vacation/FormVacation";

import VacationCard from "./components/Vacation/VacationCard";
import { IRoute, routes } from "./pages/routing";
import { useAppSelector } from "./components/Hook/ReduxHook";
import { getItem, setItem } from "./utils/localStorage";

function App() {
  const [routesMap, setRoutesMap] = useState(routes);
  const { isLoading, detailsUser } = useAppSelector((state) => state.authSlice);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (detailsUser) setItem("jwt", detailsUser.token);
    setIsLogin(true);
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
        {routes.map((route: IRoute) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
