import { MODAL, VACATIONS } from "../actions"



interface IInitialState {
    message: string,
    isOpen: boolean,
    header: string
}

const initialState = {
    vacations: [],
    isLoading: false,
    appModalError: {
        isOpen: false,
        message: null,
        header: null
    }
}

export const vacationsReducer = (state: any = initialState, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case VACATIONS.ADD_VACATION.IS_LOADING: {
            return { ...state, isLoading: action.payload }
        }
        case VACATIONS.ADD_VACATION.SUCCESS: {
            console.log(action.payload)
            state.vacations.push(action?.payload)
            return { ...state }
        }
        case VACATIONS.GET_VACATIONS.IS_LOADING: {
            return { ...state, isLoading: action?.payload }
        }
        case VACATIONS.GET_VACATIONS.SUCCESS: {
            console.log(action?.payload)
            return { ...state, vacations: action?.payload }
        }
        case VACATIONS.GET_VACATIONS.ERROR: {
            const { message } = action.payload
            console.log(action?.payload)
            return { appModalError: { ...state.appModalError, isOpen: true, header: "Get Vacation Failed", message } }
        }
        case MODAL.MODAL_ERROR.CLOSE_MODAL: {
            return {
                appModalError: { ...state.appModalError, isOpen: false }
            }


        }
        default:
            return state
    }
}