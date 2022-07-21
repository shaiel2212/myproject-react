import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Form, InputGroup } from 'react-bootstrap';


export interface Ivacation {
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

    const vacations = useSelector((state: any) => state.vacationsReducer?.vacations);
    const token = useSelector((state: any) => state.authReducer?.token)
   

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
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </div>
                            </Card>
                        </div>
    
                    )
    
    
                })}
    
    
            </div>)
    
  
   


}

export default VacationCard;

















