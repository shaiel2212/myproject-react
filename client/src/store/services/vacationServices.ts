
import axios,{ AxiosError } from "axios"

const BASEURL = "http://localhost:3500"


export interface IaddVacations {
    title: string,
    description: string,
    destination: string,
    img: string,
    checkInDate: string,
    checkOutDate:string,
    price: string,
    numberOfFollowers: number
}



export async function addVacationToDB(vacation: IaddVacations) {
    const data = await axios.post(`${BASEURL}/add-vacation`, vacation)
    return data
}

export async function getVacationsFromDB() {
    const data = await axios.get(`${BASEURL}/vacations`)
    console.log(data)
    return data
}