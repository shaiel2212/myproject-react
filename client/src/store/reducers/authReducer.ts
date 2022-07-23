import { AUTHACTIONS } from "../actions"
import {getTokenLS, setTokenLS} from "./helpers/auth"

const initialState = {
    token: undefined,
    isLoading: false,
    userName: ""
}

export const authReducer = (state: any = initialState, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case AUTHACTIONS.LOGIN_IS_LOADING: {
            return { ...state, isLoading: action?.payload }
        }
        case AUTHACTIONS.LOGIN_SUCCESS: {
            console.log("######################################################",action?.payload?.data.token)
            console.log("######################################################",action?.payload?.data.userName)
            setTokenLS(action?.payload?.data.token)
            return { ...state, token: action?.payload?.data.token, userName: action?.payload?.data.userName }
        }
        case AUTHACTIONS.LOGIN_INVISIBLE: {
            console.log(action?.payload)
            return {...state, loginInvisible: action?.payload}
        }
        case AUTHACTIONS.REGISTER.REGISTER_IS_LOADING: {
            console.log(action?.payload)
            return {...state, isLoading: action?.payload}
        }
        case AUTHACTIONS.REGISTER.REGISTER_SUCCESS: {
            console.log(action?.payload)
            return {...state}
        }
        default:
            return state
    }
}