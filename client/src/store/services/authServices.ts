import axios from "axios"
const BASE_URL = "http://localhost:3500"


export interface ILoginPayload {
    userName: string;
    password: string;
}
export interface ILoginResponse {
    // token: string;
    message: string;
}

export interface Iregister {
    user_name: string,
    first_name: string,
    last_name: string,
    password: string,

}


export async function login(payload: ILoginPayload) {
    const result = await axios.post(`${BASE_URL}/login`, payload)
    console.log("login result", result)
    return result
}

export async function register(payload: any) {
    console.log("payload from register", payload)
    const result = await axios.post(`${BASE_URL}/register`, payload)
    console.log(result.data.message)
    return result.data.message
}

