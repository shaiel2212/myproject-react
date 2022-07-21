
import axios, { AxiosError } from "axios"
import axiosInstance from "./index.axiox"

const BASEURL = "http://localhost:3500"


export interface IaddVacations {
    title: string,
    description: string,
    destination: string,
    img: string,
    checkInDate: string,
    checkOutDate: string,
    price: string,
    numberOfFollowers: number
}



export async function addVacationToDB(vacation: IaddVacations): Promise<any> {
    const data = await axiosInstance.post(`${BASEURL}/add-vacation`, vacation)
    return data
}

export async function getVacationsFromDB() {
    const  data  = await axiosInstance.get(`${BASEURL}/vacations`)
    console.log("getVacationsFromDB", data)
    return data
}

export async function deleteVacation(payload: string): Promise<any> {
    const { data } = await axiosInstance.delete(`/orders?id=${payload}`)
    return data
}