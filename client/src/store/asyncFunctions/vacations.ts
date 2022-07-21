import { store } from "../index"
import { MODAL, GET_VACATIONS, ADD_VACATION, DELETE_VACATION } from "../actions"
import { addVacationToDB, getVacationsFromDB } from "../services/vacationServices"

function getDispatch() {
    return store.dispatch
}


export interface IaddVacation {
    title: string,
    description: string,
    destination: string,
    img: string,
    checkInDate: string,
    checkOutDate: string,
    price: string,
    numberOfFollowers: string
}

export async function AddVacationACTION(vacation: any) {
    const dispatch = getDispatch()
    dispatch(addVacationIsLoading(true))
    try {
        const result = await addVacationToDB(vacation)
        console.log(result)
        dispatch(addVacationSuccess(result.data))
        return result.data
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(addVacationIsLoading(false))
    }
}

export async function getVacationACTION() {
    const dispatch = getDispatch()
    dispatch(getVacationsIsLoading(true))
    try {
        const results = await getVacationsFromDB()
        console.log("getVacationACTION", results.data)
        // _openSuccessModal(results.data)
        dispatch(getVacationSuccess(results.data))
        return results.data
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(getVacationsIsLoading(false))
    }
    function _openSuccessModal(result: { message: string }) {
        dispatch({
            type: MODAL.TOGGLE_MODAL,
            payload: {
                isOpen: true,
                header: "Success", message: result.message
            }
        })
    }
}

function getVacationsIsLoading(payload: boolean) {
    return { type: GET_VACATIONS.GET_VACATIONS_IS_LOADING, payload }
}

function getVacationSuccess(payload: any) {
    return { type: GET_VACATIONS.GET_VACATIONS_SUCCESS, payload }
}

function addVacationIsLoading(payload: boolean) {
    return { type: ADD_VACATION.ADD_VACATION_IS_LOADING, payload }
}

function addVacationSuccess(payload: any) {
    console.log(payload)
    return { type: ADD_VACATION.ADD_VACATION_SUCCESS, payload }
}


function deleteVacationSuccess(payload: any) {
    console.log(payload)
    return { type: DELETE_VACATION.DELETE_VACATION_IS_SUCCESS, payload }
}

function deleteVacationIsLoading(payload: any) {
    console.log(payload)
    return { type: DELETE_VACATION.DELETE_VACATION_IS_LOADING, payload }
}