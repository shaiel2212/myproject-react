import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form } from "react-bootstrap"
import { useSelector } from "react-redux"
import { registerACTION } from "../../../store/asyncFunctions/auth"

export function RegisterPage() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const redirect = useSelector((state: any) => state.authReducer.redirectToLogin)
    let navigate = useNavigate()

    async function register() {
        
        const result = await registerACTION({ userName, firstName, lastName, password })
   
        if (result === "Success") {
            navigate("/login")
        }
    }

    return (
        <div>
            <Form onSubmit={(e) => {
                e.preventDefault()
                register()
            }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name:</Form.Label>
                    <Form.Control type="text" required placeholder="Enter User Name" onChange={(e) => setUserName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" required placeholder="Enter First Name" onChange={(e) => setFirstName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" required placeholder="Enter Last Name" onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" required placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}