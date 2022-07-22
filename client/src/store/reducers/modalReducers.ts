import { MODAL } from "../actions"

interface IInitialState {
    message: string,
    isOpen: boolean,
    header: string
}
const initialState: IInitialState = {
    message: "",
    header: "",
    isOpen: false
}

export const modalReducer = (state: any = initialState, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case MODAL.TOGGLE_MODAL: {
            return { ...state, ...action.payload }
        }
        case MODAL.SET_MODAL_DATA: {
            return  {message: action.payload.message , header: action.payload.header , isOpen : true}
        }
        default:
            return state
    }
}