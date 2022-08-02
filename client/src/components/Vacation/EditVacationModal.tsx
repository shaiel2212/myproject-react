import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import FormVacation from "../Admin/Vacation/FormVacation";
import { IVacation } from "./../../interface/Vacation.interface";

interface EditVacationModalProps {
  show: boolean;
  vacation: IVacation|null;
}
const EditVacationModal = ({ show ,vacation}: EditVacationModalProps) => {
    useEffect(()=>{

    },[show])

  return (
    <div>
      <Modal show={true}>
        <FormVacation vacation={vacation}/>
      </Modal>
    </div>
  );
};

export default EditVacationModal;
