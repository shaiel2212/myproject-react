import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import FormVacation from "../Admin/Vacation/FormVacation";
import { IVacation } from "./../../interface/Vacation.interface";

interface EditVacationModalProps {
  show: boolean;
  vacation: IVacation | null;
}
const EditVacationModal = ({ show, vacation }: EditVacationModalProps) => {
  return (
    <div>
      <Modal show={show}>
        {vacation && <FormVacation vacation={vacation} />}
      </Modal>
    </div>
  );
};

export default EditVacationModal;
