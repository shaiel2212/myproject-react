import { MODAL, ADD_VACATION, GET_VACATIONS, DELETE_VACATION } from "../actions"



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

    switch (action?.type) {

        case ADD_VACATION.ADD_VACATION_IS_LOADING: {
            return { ...state, isLoading: action?.payload }
        }
        case ADD_VACATION.ADD_VACATION_SUCCESS: {
            state.vacations.push(action?.payload)
        
           
            return { ...state }
        }
        case GET_VACATIONS.GET_VACATIONS_IS_LOADING: {
         
            return { ...state, isLoading: action?.payload }
        }
        case GET_VACATIONS.GET_VACATIONS_SUCCESS: {
  
            return { ...state, vacations: action?.payload }
        }
        case GET_VACATIONS.GET_VACATIONS_ERROR: {
            const { message } = action.payload
      
            return { appModalError: { ...state.appModalError, isOpen: true, header: "Get Vacation Failed", message } }
        }
        case DELETE_VACATION.DELETE_VACATION_IS_LOADING: {
          
            return { ...state, vacations: action?.payload }
        }
        case DELETE_VACATION.DELETE_VACATION_IS_SUCCESS: {
     
            return { ...state, vacations: action?.payload }
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