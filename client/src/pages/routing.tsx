import { LoginPage } from "../components/auth/loginPage/index";
import { RegisterPage } from "../components/auth/registerPage";
import VacationCard from "../components/Vacation/VacationCard";

export interface IRoute {
  path: string;
  linkText: string;
  element: JSX.Element | JSX.Element[];
  invisible?: boolean;
  exact: boolean;
}

export const routes: IRoute[] = [
  {
    path: "/login",
    linkText: "Login",
    element: <LoginPage />,
    invisible: true,
    exact: true,
  },
  {
    path: "/vacations",
    linkText: "Home",
    element: <VacationCard />,
    exact: false,
  },
  {
    path: "/register",
    linkText: "Register",
    element: <RegisterPage />,
    invisible: true,
    exact: true,
  },

];
