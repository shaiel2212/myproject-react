import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form } from "react-bootstrap"
import { useSelector } from "react-redux"
import { IRegiterPayload } from "../../../interface/User.interface";
import CustomInput from "../../UI/CustomInput";
import "./createUser.css";

export function RegisterPage() {

    const [registerValues, setregisterValues] = useState<IRegiterPayload>({
        userName: "",
        firstName: "",
        lastName: "",
        password: "",
        isAdmin: "",

    });

    const handleVacationForm = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = e.target;


        switch (name) {
            case "userName":
                return setregisterValues({ ...registerValues, userName: value });
            case "firstName":
                return setregisterValues({ ...registerValues, firstName: value });
            case "lastName":
                return setregisterValues({ ...registerValues, lastName: value });
            case "password":
                return setregisterValues({ ...registerValues, password: value });
            default:
        }
    };
    async function register(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault

    }

    return (
        <div>
            <h1>Register Page</h1>
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
                                name="lasttName"
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
                    <div >
                        <button className="btn--submit--create--user" type="submit">
                            Send
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}