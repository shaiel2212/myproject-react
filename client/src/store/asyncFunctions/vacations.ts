import { store } from "../index"
import { MODAL, VACATIONS } from "../actions"
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
    checkOutDate:string,
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
        console.log(results.data)
        _openSuccessModal(results.data)
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
    return { type: VACATIONS.GET_VACATIONS.IS_LOADING, payload }
}

function getVacationSuccess(payload: any) {
    return { type: VACATIONS.GET_VACATIONS.SUCCESS, payload }
}

function addVacationIsLoading(payload: boolean) {
    return { type: VACATIONS.ADD_VACATION.IS_LOADING, payload }
}

function addVacationSuccess(payload: any) {
    console.log(payload)
    return { type: VACATIONS.ADD_VACATION.SUCCESS, payload }
}