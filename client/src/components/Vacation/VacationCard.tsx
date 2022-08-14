import moment from "moment";
import { Button, Card } from "react-bootstrap";
import { IVacation } from "../../interface/Vacation.interface";
import { useAppDispatch, useAppSelector } from "../Hook/ReduxHook";
import { useEffect } from "react";
import {
  deleteVacationRequest,
  editVacation,
  openModal,
  closeModal,
  vacationRequest,
} from "../../store/redusers/VacationSlice";

import VacationPopModal from "./VacationPopModal";

function VacationCard() {
  const { vacations, isLoading, vacation, showModal } = useAppSelector(
    (state) => state.vacationSlice
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(vacationRequest());
  }, []);

  const editVacationHandler = (payload: IVacation) => {
    dispatch(editVacation(payload));
  };
  function deleteVacationById(vacation_id: string | number): void {
    dispatch(deleteVacationRequest(vacation_id));
  }

  if (isLoading) {
    return (
      <>
        <h1>Loading ....</h1>
      </>
    );
  }

  const VacationModalForm = (
    <>
      {showModal && (
        <VacationPopModal
          show={showModal}
          vacation={vacation ? vacation : null}
          titleForm={vacation ? "Edit Vacation" : "Create Vacation"}
        />
      )}
    </>
  );
  return (
    <div className="container">
      <h1> vacations page </h1>
      <button onClick={() => dispatch(openModal())}>
        create new vacation
      </button>
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
                  <Button
                    href="#"
                    onClick={() =>
                      deleteVacationById(vac?.vacation_id as string | number)
                    }
                  >
                    Delete
                  </Button>
                </Card.Body>
              </div>
            </Card>
          </div>
        );
      })}
      {VacationModalForm}
    </div>
  );
}

export default VacationCard;
