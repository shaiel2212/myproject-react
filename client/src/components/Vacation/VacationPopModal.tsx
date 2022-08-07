import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import FormVacation from "../Admin/Vacation/FormVacation";
import { IVacation } from "./../../interface/Vacation.interface";

interface EditVacationModalProps {
  show: boolean;
  vacation: IVacation | null;
  titleForm:string;
}
const VacationPopModal = ({ show, vacation,titleForm }: EditVacationModalProps) => {
  console.log({ show, vacation })
  return (
    <div>

      <Modal show={show}>
        <FormVacation titleForm={titleForm} vacation={vacation} />
      </Modal>
    </div>
  );
};

export default VacationPopModal;
