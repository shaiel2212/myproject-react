import { MODAL } from "../actions"

interface IInitialState {
    message: string,
    isOpen: boolean,
    header: string,
    data: any
}
const initialState: IInitialState = {
    message: "",
    header: "",
    isOpen: false,
    data : {}
}

export const modalReducer = (state: any = initialState, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case MODAL.TOGGLE_MODAL: {
            return { ...state, ...action.payload }
        }
        case MODAL.SET_MODAL_DATA: {
            const {message, header, data } = action.payload
            return  {message , header , data ,  isOpen : true}
        }
        default:
            return state
    }
}