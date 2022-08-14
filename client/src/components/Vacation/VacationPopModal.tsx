import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import FormVacation from "../Admin/Vacation/FormVacation";
import { IVacation } from "./../../interface/Vacation.interface";
import { closeModal } from "../../store/redusers/VacationSlice";
import { useAppDispatch } from "../Hook/ReduxHook";
interface EditVacationModalProps {
  show: boolean;
  vacation: IVacation | null;
  titleForm: string;
}
const VacationPopModal = ({
  show,
  vacation,
  titleForm,
}: EditVacationModalProps) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Modal show={show} onHide={() => dispatch(closeModal())}>
        <FormVacation titleForm={titleForm} vacation={vacation} />
      </Modal>
    </div>
  );
};

export default VacationPopModal;
