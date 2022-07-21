import { getConnection } from "../../db";
import { addVacationQuery, getVacationQuery } from "./query";

interface IaddVacation {
    title: string,
    description: string,
    destination: string,
    img: string,
    checkIn: string,
    checkOut: string,
    price: number,
    numberOfFollowers: undefined
}

export async function addVacation(vacation: IaddVacation) {
    const { title, description, destination, img, checkIn, checkOut, price, numberOfFollowers } = vacation
    const query = addVacationQuery()
    console.log("addVacation", vacation)
    try {

        const row = await getConnection().execute(query, [title, description, destination, img, checkIn, checkOut, price]);
      
        return row
    } catch (ex) {
        console.log(ex)
        return null
    }
}

export async function getVacations() {
    const query = getVacationQuery();
    try {
        const [results] = await getConnection().execute(query)

        return results
    } catch (ex) {
        console.log(ex)
    }
}