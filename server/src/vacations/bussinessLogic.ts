import { getConnection } from "../../db";

export async function addVacation(vacation: any) {
    const { title, description, destination, img, checkIn, checkOut, price } = vacation
    const addVacationQuery = (`INSERT INTO vacationSite.vacations (description, destination, img, checkInDate, checkOutDate, price, numberOfFollowers, title) VALUES (?,?,?,?,?,?,?,?);`);
    const numberOfFollowers = 0
    console.log(vacation, numberOfFollowers)
    try {
        const row = await getConnection().execute(addVacationQuery, [description, destination, img, checkIn, checkOut, price, numberOfFollowers, title]);
        return row
    }catch(ex) {
        console.log(ex)
        return null
    }
}

export async function getVacations() {
    const getVacationQuery = (`SELECT * FROM vacationSite.vacations`)
    try{
        const [results] = await getConnection().execute(getVacationQuery)
        console.log(results)
        return results[0]
    }catch(ex){
        console.log(ex)
    }
}