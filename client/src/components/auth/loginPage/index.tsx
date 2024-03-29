import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hook/ReduxHook";
import { useNavigate } from "react-router-dom";

import { WithLoading } from "../../UI/loadingComponent";
import { loginRequest } from "../../../store/redusers/AuthSlice";
import { isEmpty } from "../../../utils/_NotEmptyObject";

export function LoginPage() {
  // #13
  const dispatch = useAppDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

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

  return (
    <div className="login-form">
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Login</h3>

                <WithLoading isLoading={false}>
                  <form className="requires-validation" onSubmit={handlerLogin}>
                    <div className="col-md-12">
                      <input
                        value={userName}
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                      />
                      <div className="valid-feedback">
                        Username field is valid!
                      </div>
                      <div className="invalid-feedback">
                        Username field cannot be blank!
                      </div>
                    </div>
                    <div className="col-md-12">
                      <input
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                      <div className="valid-feedback">
                        Password field is valid!
                      </div>
                      <div className="invalid-feedback">
                        Password field cannot be blank!
                      </div>
                    </div>
                    <div className="col-md-12 mt-3">
                      <div className="form-button mt-3">
                        <button
                          id="submit"
                          type="submit"
                          className="btn btn-primary"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </WithLoading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
