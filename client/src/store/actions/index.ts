
export const AUTHACTIONS = {
    LOGIN_IS_LOADING: " LOGIN_IS_LOADING",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_INVISIBLE: "LOGIN_INVISIBLE",
    REGISTER: {
        REGISTER_IS_LOADING: "REGISTER_IS_LOADING",
        REGISTER_SUCCESS: "REGISTER_SUCCESSCESS"
    }

}

export const ADD_VACATION = {
    ADD_VACATION_IS_LOADING: "ADD_VACATION_IS_LOADING",
    ADD_VACATION_SUCCESS: "SUCCEADD_VACATION_SUCCESSSS",

}

export const DELETE_VACATION = {
    DELETE_VACATION_IS_LOADING: "DELETE_VACATION_IS_LOADING",
    DELETE_VACATION_IS_SUCCESS: "DELETE_VACATION_IS_SUCCESS"

}

export const GET_VACATIONS = {
    GET_VACATIONS_IS_LOADING: "GET_VACATIONS_IS_LOADING",
    GET_VACATIONS_SUCCESS: "GET_VACATIONS_SUCCESS",
    GET_VACATIONS_ERROR: "GET_VACATIONS_ERROR"
}

export const MODAL = {
    TOGGLE_MODAL: "TOGGLE_MODAL",
    SET_MODAL_DATA: "SET_MODAL_DATA",
    MODAL_ERROR: {
        CLOSE_MODAL: "CLOSE_MODAL",
    }
}


interface setModalDataProps {
    message : string,
    header: string
}
export const setModalData = (payload : setModalDataProps)=> {
    return {
        type: MODAL.SET_MODAL_DATA,
        payload
    }
}