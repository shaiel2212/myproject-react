import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import { LoginPage } from './components/auth/loginPage';
import { RegisterPage } from './components/auth/registerPage';
import { useSelector } from 'react-redux';
import { store } from './store';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import AddVacation from './components/addVacation';
import { getVacationACTION } from './store/asyncFunctions/vacations';
import AppModal from './components/modal';
import VacationCard from './components/vacation/vaction';
import { isGeneratorFunction } from 'util/types';
import path from 'path';



interface IRoute {
  path: string
  linkText: string
  element: any
  invisible?: boolean
}

let isLogin = false





function App() {

  const routes = [
    { path: "/login", linkText: "Login", element: <LoginPage />, invisible: false },
    { path: "/vacations", linkText: "Home", element: <VacationCard />, invisible: false },
    { path: "/register", linkText: "Register", element: <RegisterPage />, invisible: false },
    { path: "/vacation", linkText: "Add Vacation", element: <AddVacation />, invisible: false },

  ]
  const [routesMap, setRoutesMap] = useState(routes);


  const userName = useSelector((state: any) => state.authReducer.userName)
  const token = useSelector((state: any) => state.authReducer?.token)


  // useEffect(() => {
  //   if (token) {
  //     console.log("use efeect on token", userName)
  //     if (userName === "shaiel12") {
  //       routesMap.map(i => {

  //         console.log("######################################## courrnt i.invisible", i.invisible)
  //         if (i.invisible = true) {
  //           let iInvisble = i.invisible
  //           return { ...i, iInvisble : false }

  //           console.log("######################################## newnewinvisible ", iInvisble)
  //           return iInvisble
  //         }
  //       })
  //     }
  //   }



  // }, [userName])

  useEffect(() => {
    console.log("use efeect on token", token)
    if (token) {
      const newRoutesMap = routesMap.map(route => {
        if (route.path === "/login") {
          return { ...route, invisible: true }
        }
        return route
      });

      setRoutesMap(newRoutesMap)
    }


  }, [token])

  useEffect(() => {
    getVacationACTION()
  }, [])



  return (
    <Router>
      <Navbar expand="lg" sticky="top" variant='dark' bg="dark" className="App" key={Math.random()} style={{ textAlign: "left" }}>
        <Container>

          <Navbar.Brand style={{ margin: "10px", fontSize: "24px" }} as={Link} to="/">Vacation App</Navbar.Brand>
        </Container>
        {routesMap.filter((route: IRoute) => !route.invisible).map((route: IRoute) => (
          <span key={route.linkText} style={{ margin: "5px" }}>
            <Nav.Link as={Link} key={route.linkText} style={{ textDecoration: "none", color: "white", whiteSpace: "nowrap" }} to={route.path}>{route.linkText}</Nav.Link>
          </span>
        ))}
        <Container>
          <Nav style={{ marginLeft: "80%", color: "white" }} >
            <NavDropdown title={userName}>
              Logout
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <AppModal />
      <Routes>
        {routes.map((route: IRoute) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
