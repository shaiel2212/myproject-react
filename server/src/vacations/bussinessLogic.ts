import { getConnection } from "../../db";
import { createVacationQuery, readVacationQuery } from "./query";

interface IaddVacation {
    title: string,
    description: string,
    destination: string,
    imgUrl: string,
    checkInDate: string,
    checkOutDate: string,
    price: number,
    numberOfFollowers: undefined
}

export async function addVacation(vacation: IaddVacation) {
    const { title, description ,destination, imgUrl, checkInDate, checkOutDate, price } = vacation
    //const query = createVacationQuery()
    const numberOfFollowers = 0;
    console.log("addVacation", vacation)
    try {
        const query = (`INSERT INTO vacations (title, description, destination, imgUrl, checkInDate, checkOutDate, price, numberOfFollowers) VALUES (?,?,?,?,?,?,?,?);`);
        const row = await getConnection().execute(query, [title, description, destination, imgUrl, checkInDate, checkOutDate,price , numberOfFollowers]);
        return row 
    } catch (ex) {
        console.log(ex)
        return null
    }
}

export async function getVacations() {
    const query = readVacationQuery();
    try {
        const [results] = await getConnection().execute(query)

        return results
    } catch (ex) {
        console.log(ex)
    }
}