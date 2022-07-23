import axios from "axios"
import { IVacation } from "../../interface/Vacation.interface"
// import { useCloseModalHook } from "../../components/modal"

const BASEURL = "http://localhost:3500"





export async function addVacationToDB(vacation: IVacation): Promise<any> {
    console.log("i got vacation ," ,{vacation})
    const data = await axios.post(`${BASEURL}/vacations`, vacation)

    return data
}

export async function getVacationsFromDB() {
    const data = await axios.get(`${BASEURL}/vacations`)

    return data
}

export async function deleteVacation(id: string) {

    try {
        await axios.delete(`${BASEURL}/vacations/${id}`);
    } catch (error) {
        console.log("Somthing went wrong you need to handle this case");

    }
}
