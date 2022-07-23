import axios from "axios"
// import { useCloseModalHook } from "../../components/modal"

const BASEURL = "http://localhost:3500"


export interface IaddVacations {
    title: string,
    description: string,
    destination: string,
    imgUrl: string,
    checkInDate: string,
    checkOutDate: string,
    price: number,
    numberOfFollowers: number
}



export async function addVacationToDB(vacation: IaddVacations): Promise<any> {
    const data = await axios.post(`${BASEURL}/vacations`, {vacation})
    console.log("data and vacation", data, vacation)
    return data
}

export async function getVacationsFromDB() {
    const data = await axios.get(`${BASEURL}/vacations`)
    console.log("getVacationsFromDB", data)
    return data
}

export async function deleteVacation(id: string) {

    try {
        await axios.delete(`${BASEURL}/vacations/${id}`);
    } catch (error) {
        console.log("Somthing went wrong you need to handle this case");

    }
}
