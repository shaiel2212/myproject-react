import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../Hook/ReduxHook";
import { IRegisterPayload } from "../../../interface/User.interface";
import CustomInput from "../../UI/CustomInput";
import "./createUser.css";
import {
  registerRequest,
  removeMessage,
} from "../../../store/redusers/AuthSlice";
import { isEmpty } from "../../../utils/_NotEmptyObject";
import { Alert } from "react-bootstrap";

export function RegisterPage() {
  const dispatch = useAppDispatch();
  const { message, isRegisterSuccess } = useAppSelector(
    (state) => state.authSlice
  );
  const [registerValues, setRegisterValues] = useState<IRegisterPayload>({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleVacationForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    switch (name) {
      case "userName":
        return setRegisterValues({ ...registerValues, userName: value });
      case "firstName":
        return setRegisterValues({ ...registerValues, firstName: value });
      case "lastName":
        return setRegisterValues({ ...registerValues, lastName: value });
      case "password":
        return setRegisterValues({ ...registerValues, password: value });
      default:
    }
  };
  async function register(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isEmpty(registerValues)) return;
    dispatch(registerRequest(registerValues));
  }
  const clearMessage = setTimeout(() => dispatch(removeMessage()), 5000);
  useEffect(() => {
    clearTimeout(clearMessage);
    return () => clearTimeout(clearMessage);
  }, [dispatch, message]);

  return (
    <div>
      <h1>Register Page</h1>
      <div>
        {" "}
        {message?.length ? (
          <Alert variant={isRegisterSuccess ? "success" : "danger"}>
            {message}
          </Alert>
        ) : null}
      </div>
      <form onSubmit={(e) => register(e)}>
        <div className="form-container">
          <div className="input--row">
            <span className="input--col">
              <CustomInput
                label="User Name"
                name="userName"
                onChange={handleVacationForm}
                placeholder="User Name"
                type="text"
              />
            </span>

            <span className="input--col">
              <CustomInput
                label="First Name"
                name="firstName"
                onChange={handleVacationForm}
                placeholder="First Name"
                type="text"
              />
            </span>
          </div>
          {/* description */}
          <div className="input--row">
            <span className="input--col">
              <CustomInput
                label="Last Name"
                name="lastName"
                onChange={handleVacationForm}
                placeholder="Last Name"
                type="text"
              />
            </span>

            <span className="input--col">
              <CustomInput
                label="Password"
                name="password"
                onChange={handleVacationForm}
                placeholder="Password"
                type="password"
              />
            </span>
          </div>
          <div>
            <button className="btn--submit--create--user" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
