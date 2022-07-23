import { getConnection } from "../../db";
import {
  createVacationQuery,
  deleteVacationQuery,
  readVacationQuery,
  updateVacationQuery,
} from "./query";

interface IVacation {
  id?: number;
  title: string;
  description: string;
  destination: string;
  imgUrl: string;
  checkInDate: string;
  checkOutDate: string;
  price: string;
  numberOfFollowers: undefined;
}

export async function addVacation({ title, description, destination, imgUrl, checkInDate, checkOutDate, price }: IVacation) {
  //const query = createVacationQuery()

  try {
    const query = createVacationQuery();
    console.log({ title, description, destination, imgUrl, checkInDate, checkOutDate, price })

    const row = await getConnection().execute(query, [  title, description, destination, imgUrl, checkInDate, checkOutDate, price ,0]);
    return row;
  } catch (ex) {
    console.log(ex);
    return null;
  }
}

export async function getVacations() {
  const query = readVacationQuery();
  try {
    const [results] = await getConnection().execute(query);

    return results;
  } catch (ex) {
    console.log(ex);
  }
}

export async function deleteVacations(id: string) {
  const query = deleteVacationQuery();
  try {
    await getConnection().execute(query, [Number(id)]);
    return true;
  } catch (error) {
    console.log("Error", error);
    return false;
  }
}

export async function updateVacation(vacation: IVacation) {
  const {
    id,
    title,
    description,
    destination,
    imgUrl,
    checkInDate,
    checkOutDate,
    price,
  } = vacation;
  try {
    const query = updateVacationQuery();
    await getConnection().execute(query, [
      title,
      description,
      destination,
      imgUrl,
      checkInDate,
      checkOutDate,
      price,
    ]);
    return true;
  } catch (error) {
    console.log("Error", error);
    return false;
  }
}
