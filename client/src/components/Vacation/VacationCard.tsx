import moment from "moment";
import { Button, Card } from "react-bootstrap";
import { IVacation } from "../../interface/Vacation.interface";
import { useAppDispatch, useAppSelector } from "../Hook/ReduxHook";
import { useEffect } from "react";
import {
  editVacation,
  vacationRequest,
} from "../../store/redusers/VacationSlice";
import EditVacationModal from "./EditVacationModal";

function VacationCard() {
  const action = useAppDispatch();
  useEffect(() => {
    action(vacationRequest());
  }, []);

  const { vacations, isLoading ,vacation,showModal} = useAppSelector(
    (state) => state.vacationSlice
  );

  const editVacationHandler = (payload: IVacation) => {
    action(editVacation(payload));
  };

  if (isLoading) {
    return (
      <>
        <h1>Loading ....</h1>
      </>
    );
  }

  return (
    <div className="container">
      <h1> vacations page </h1>
      {vacations?.map((vac: IVacation) => {
        return (
          <div key={vac.vacation_id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZhY2F0aW9uc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Title : {vac.title}</Card.Title>
                <Card.Text>Description : {vac.description}</Card.Text>
                <Card.Text>Destionsion : {vac.destination}</Card.Text>
                <Card.Text>
                  Check In Date : {moment(vac.checkInDate).format("DD/MM/YYYY")}
                </Card.Text>
                <Card.Text>
                  {/* <InputGroup className="mb-3">

                                        <Form.Control type="date"aria-label="Amount (to the nearest dollar)" />

                                    </InputGroup> */}
                  Check Out Date :{" "}
                  {moment(vac.checkOutDate).format("DD/MM/YYYY")}
                </Card.Text>
                <Card.Text>Price : {vac.price}$</Card.Text>
                <Card.Text>
                  Number OF Followers : {vac.numberOfFollowers}
                </Card.Text>
              </Card.Body>
              <div>
                <Card.Body>
                  <Button onClick={() => editVacationHandler(vac)}>
                    Update
                  </Button>
                  <Button href="#" onClick={() => {}}>
                    Delete
                  </Button>
                </Card.Body>
              </div>
            </Card>
          </div>
        );
      })}
    {showModal &&   <EditVacationModal show={showModal} vacation={vacation && vacation} />}
    </div>
  );
}

export default VacationCard;
