import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hook/ReduxHook";
import { useNavigate } from "react-router-dom";

import { WithLoading } from "../../UI/loadingComponent";
import { loginRequest } from "../../../store/redusers/AuthSlice";
import { isEmpty } from "../../../utils/_NotEmptyObject";
import { Alert } from "react-bootstrap";
import { removeMessage } from "../../../store/redusers/AuthSlice";
import CustomInput from "../../UI/CustomInput";

export function LoginPage() {
  // #13
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, detailsUser, message } = useAppSelector(
    (state) => state.authSlice
  );
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handlerLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = { userName, password };
    if (!isEmpty(values)) return;

    await dispatch(
      loginRequest({
        userName,
        password,
      })
    );
  }
  const clearMessage = setTimeout(() => dispatch(removeMessage()), 3000);
  useEffect(() => {
    if (message && message.length > 0) {
      clearTimeout(clearMessage);
    }
  }, [dispatch, message]);

  useEffect(() => {
    if (detailsUser && !isEmpty(detailsUser)) {
      navigate("/vacations");
    }
  }, [dispatch, detailsUser, navigate]);

  return (
    <div>
      <h3>Login</h3>
      <div>
        {" "}
        {message?.length ? <Alert variant={"danger"}>{message}</Alert> : <></>}
      </div>
      <WithLoading isLoading={false}>
        <form onSubmit={handlerLogin}>
          <div className="form-container">
            <div className="input--row">
              <span className="input--col">
                <CustomInput
                  label="User Name"
                  name="name"
                  placeholder="Full Name"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  type="text"
                />
              </span>

              <span className="input--col">
                <CustomInput
                  label="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </span>
            </div>

            <div className="container--button">
              <button className="btn--submit--create--user" type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </WithLoading>
    </div>
  );
}
