
import axios from "axios";
import { Button, Modal, ModalProps } from "react-bootstrap";
// import { useSelector } from "react-redux";
// // import { useCloseModalHook } from ".";
// import { deleteVacation } from "../../store/services/vacationServices";

// const DeleteVacationModal = () => {
//     const appModalState = useSelector((state: any) => state?.modalReducer) as ModalProps;
//     const closeModal = useCloseModalHook()
//     const { id } = appModalState.data;
//     deleteVacation(id);
//     closeModal();

//     return <div>

//         <h4>
//             Are you sure you wantto delete vacation number {appModalState.data.id}
//         </h4>

//         <button onClick={deleteVacation}>Delete</button>

//     </div>
// }