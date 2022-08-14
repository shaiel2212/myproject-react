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
    // if (!isEmpty(values)) return;

    await dispatch(
      loginRequest({
        userName:'shaiel12',
        password:'123',
      })
    );
  }

  return (
    <div>
      <h3>Login</h3>

      <WithLoading isLoading={false}>
        <form onSubmit={handlerLogin}>
          <div>
            <input
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              type="text"
              name="name"
              placeholder="Full Name"
       
            />
            <div>Username field is valid!</div>
            <div>Username field cannot be blank!</div>
          </div>
          <div>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              placeholder="Password"
              
            
            />
            <div>Password field is valid!</div>
            <div>Password field cannot be blank!</div>
          </div>
          <div>
            <div>
              <button id="submit" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </WithLoading>
    </div>
  );
}
