import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap"
import { convertToObject } from 'typescript'
import { AddVacationACTION } from '../../store/asyncFunctions/vacations'

function AddVacation() {

    const [description, setDescription] = useState("")
    const [destination, setDestination] = useState("")
    const [img, setImg] = useState("")
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [price, setPrice] = useState("")
    const [title, setTitle] = useState("")

    function addVacation() {
        console.log(description, destination, img, checkIn, checkOut, price, title)
        AddVacationACTION({ title, description, destination, img, checkIn, checkOut, price })
    }

    return (
        <div className="container" style={{ textAlign: "center" ,  }}>
            <h1>Add Vacation</h1>
            <Form onSubmit={(e) => {
                e.preventDefault()
                addVacation()
            }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Vacation Title:</Form.Label>
                    <Form.Control type="text" required placeholder="Enter vacation title" onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Destination:</Form.Label>
                    <Form.Control type="text" required placeholder="Enter vacation destination" onChange={(e) => setDestination(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="text" required placeholder="Enter vacation description" onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Vacation Image:</Form.Label>
                    <Form.Control type="text" required placeholder="Enter img link" onChange={(e) => setImg(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Check In:</Form.Label>
                    <Form.Control type="date" required placeholder="Enter img link" onChange={(e) => setCheckIn(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Check Out:</Form.Label>
                    <Form.Control type="date" required placeholder="Enter img link" onChange={(e) => setCheckOut(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="number" required onChange={(e) => setPrice(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </div>
    )
}

export default AddVacation