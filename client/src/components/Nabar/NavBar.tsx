import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector } from "../Hook/ReduxHook";
import LinkItem from "./LinkItem";
import { useAppDispatch } from "./../Hook/ReduxHook";
import { logout } from "../../store/redusers/AuthSlice";

const NavBar = () => {
  const { detailsUser } = useAppSelector((state) => state.authSlice);
  const dispatch = useAppDispatch();

  function logoutHandler(): void {
    dispatch(logout());
  }

  return (
    <>
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
        <>
          {!detailsUser?.token ? (
            <>
              <LinkItem linkName="Login" to="/Login" />
              <LinkItem linkName="Register" to="/Register" />
            </>
          ) : (
            <>
              <LinkItem linkName="logOut" to="/Login" onClick={logoutHandler} />
              <LinkItem linkName="vacations" to="vacations" />
            </>
          )}
        </>
      </Navbar>
    </>
  );
};

export default NavBar;
