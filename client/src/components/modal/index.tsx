import axios from "axios";
import { Action } from "history";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { } from "../../store"
import { MODAL } from "../../store/actions";



type messageType = 'editVacation' | "deleteVacation"
interface ModalProps {
    isOpen: boolean,
    header: string,
    message: messageType,
    data: any
}




// TODO 
const DeleteVacationModal = () => {
    const appModalState = useSelector((state: any) => state?.modalReducer) as ModalProps;
    const closeModal = useCloseModalHook()


    const handleDeleteVacation = async () => {
        const { id } = appModalState.data;
        try {
            await axios.delete(`http://localhost:3500/vacations/${id}`);
            closeModal()
        } catch (error) {
            console.log("Somthing went wrong you need to handle this case");

        }
    }
    return (
        <div>
            <h4>
                Are you sure you want to delete vacation number {appModalState.data.id}
            </h4>
            <button onClick={handleDeleteVacation}>Delete</button>
        </div>)
}

const modalsMap = {
    "editVacation": <div></div>,
    "deleteVacation": <DeleteVacationModal />
}

const useCloseModalHook = () => {
    const dispatch = useDispatch();

    const closeFn = () => { dispatch({ type: MODAL.TOGGLE_MODAL, payload: { isOpen: false } }) }

    return () => closeFn()
}

export default function AppModal() {

    const appModalState = useSelector((state: any) => state?.modalReducer) as ModalProps
    const closeFn = useCloseModalHook()
    const { isOpen, header, message } = appModalState
    return (<Modal show={isOpen} onHide={closeFn}>
        <Modal.Header closeButton>
            <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalsMap[message]}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={closeFn}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>)
}
