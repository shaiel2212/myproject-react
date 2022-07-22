import { Action } from "history";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { } from "../../store"
import { MODAL } from "../../store/actions";


const modalsMap  = {
    "editVacation": <div></div>,
    "deleteVacation": <div>Should ask user if ...</div>
}


type messageType = 'editVacation' | "deleteVacation"
interface  ModalProps {
    isOpen:boolean,
    header: string,
    message: messageType

}
export default function AppModal() {

    const appModalState = useSelector((state: any) => state?.modalReducer) as ModalProps
    const dispatch = useDispatch();

    const closeFn = () => { dispatch({ type: MODAL.TOGGLE_MODAL, payload: { isOpen: false } }) }
    const { isOpen, header, message  } = appModalState
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
