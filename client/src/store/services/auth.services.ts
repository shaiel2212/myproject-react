import axios from "axios"
import { IUserLogin } from "../../interface/User.interface";
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


export async function login(payload: ILoginPayload):Promise<IUserLogin> {
    const {data} = await axios.post<IUserLogin>(`${BASE_URL}/login`, payload)

    return data
}

export async function register(payload: any) {
   
    const result = await axios.post(`${BASE_URL}/register`, payload)
   
    return result.data.message
}

