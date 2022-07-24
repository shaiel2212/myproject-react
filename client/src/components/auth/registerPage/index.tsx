import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form } from "react-bootstrap"
import { useSelector } from "react-redux"


export function RegisterPage() {

 

    const redirect = useSelector((state: any) => state.authReducer.redirectToLogin)
    let navigate = useNavigate()

    async function register() {
       
   
       
    }

    return (
        <div>
            <Form onSubmit={(e) => {
                e.preventDefault()
                register()
            }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name:</Form.Label>
                    <Form.Control type="text" required placeholder="Enter User Name"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" required placeholder="Enter First Name"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" required placeholder="Enter Last Name"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" required placeholder="Enter Password"  />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}