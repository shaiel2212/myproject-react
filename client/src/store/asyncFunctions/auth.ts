import { useNavigate } from "react-router-dom";
import { store } from "..";
import { APPOINTMENTSACCTION, AUTHACTIONS, MODAL } from "../actions";
import {  Iregister, login, register } from "../services/authServices";

function getDispatch() {
    return store.dispatch
}

export async function loginACTION(payload: any) {
    const dispatch = getDispatch()
    dispatch(loginIsLoading(true))
    try {
        const data = await login(payload)
        console.log(data)
        dispatch(loginSuccess(data))
        return data
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(loginIsLoading(false))
    }
}

export async function registerACTION(payload: any) {
    const dispatch = getDispatch()
    dispatch(registerIsLoading(true))
    try {
        const data: any = await register(payload)
        console.log("registerACTION",data)
        if (data.message === "Success") {
            dispatch(registerSuccess(true))
        }
        return data
    } catch (ex: any) {
        // dispatch(getVacationError({ message: ex.message }))
    } finally {
        dispatch(registerIsLoading(false))
    }
}

function registerIsLoading(payload: boolean) {
    return { type: AUTHACTIONS.REGISTER_IS_LOADING, payload }
}

function registerSuccess(payload: boolean) {
    console.log(payload)
    return { type: AUTHACTIONS.REGISTER_SUCCESS, payload }
}

function loginIsLoading(payload: boolean) {
    return { type: AUTHACTIONS.LOGIN_IS_LOADING, payload }
}

function loginSuccess(payload: any) {
    console.log(payload)
    return { type: AUTHACTIONS.LOGIN_SUCCESS, payload }
}

function getVacationError(payload: any) {
    return { type: MODAL.MODAL_ERROR,payload };
}