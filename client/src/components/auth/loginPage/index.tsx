import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { AUTHACTIONS } from "../../../store/actions";
import { loginACTION } from "../../../store/asyncFunctions/auth";
import { WithLoading } from "../../ui-components/loadingComponent";

export function LoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showBtn, setShowBtn] = useState(false)
    const reduxDispatch = useDispatch();
    let navigate = useNavigate()

    const isLoading = useSelector((state: any) => state.authReducer.isLoading);
    const token = useSelector((state: any) => state.authReducer.token);

    async function login() {
        const result = await loginACTION({ userName, password });
        console.log("result login", result)
        if (result?.data.message === "Success") {
            console.log(result)
            reduxDispatch(loginSuccessRedirect(true))
            navigate("/")
        }
    }

    function loginSuccessRedirect(payload: boolean) {
        return { type: AUTHACTIONS.LOGIN_INVISIBLE, payload }
    }

    if (typeof token === "string") return <Navigate to="/" />;
    return (
        <div className="login-form">
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Login</h3>
                                <p>Fill in the data below.</p>
                                <WithLoading isLoading={isLoading}>
                                    <form className="requires-validation" onSubmit={(e) => {
                                        e.preventDefault()
                                        login()
                                    }}>
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