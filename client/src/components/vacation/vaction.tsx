import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Form, InputGroup } from 'react-bootstrap';
import AppModal from '../modal';
import { setModalData } from '../../store/actions';


export interface Ivacation {
    vacation_id: number,
    desc: string,
    title: string,
    destination: string,
    img: string,
    checkInDate: string,
    checkOutDate: string,
    price: string,
    numberOfFollowers: string
}


function VacationCard() {

    const vacations = useSelector((state: any) => state.vacationsReducer?.vacations) as Ivacation[];
    const token = useSelector((state: any) => state.authReducer?.token)

    const dispatch = useDispatch()

    const handleOpenVacationModal = (id: number) => {
        console.log("this is id", id)
        dispatch(setModalData({message: "deleteVacation" , header: "Modal Header"}))
    }
    return (
        <div className='container'>
            <h1> vacations page </h1>
            {vacations?.map((vac: Ivacation) => {
                return (

                    <div>
                        <Card style={{ width: '18rem', }}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZhY2F0aW9uc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                <Card.Title>Title : {vac.title}</Card.Title>
                                <Card.Text>
                                    Description : {vac.desc}
                                </Card.Text>
                                <Card.Text>
                                    Destionsion : {vac.destination}
                                </Card.Text>
                                <Card.Text>
                                    Check In Date : {moment(vac.checkInDate).format("DD/MM/YYYY")}
                                </Card.Text>
                                <Card.Text>
                                    {/* <InputGroup className="mb-3">
    
                                            <Form.Control type="date"aria-label="Amount (to the nearest dollar)" />
    
                                        </InputGroup> */}
                                    Check Out Date : {moment(vac.checkOutDate).format("DD/MM/YYYY")}
                                </Card.Text>
                                <Card.Text>
                                    Price : {vac.price}$
                                </Card.Text>
                                <Card.Text>
                                    Number OF Followers : {vac.numberOfFollowers}
                                </Card.Text>
                            </Card.Body>
                            <div>

                                <Card.Body>
                                    <Button href="#">Update</Button>
                                    <Button href="#" onClick={() => handleOpenVacationModal(vac.vacation_id)}>Delete</Button>
                                </Card.Body>
                            </div>
                        </Card>
                    </div>

                )


            })}


        </div>)





}

export default VacationCard;

















