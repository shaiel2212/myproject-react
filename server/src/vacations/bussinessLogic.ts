import { getConnection } from "../../db";
import {
  createVacationQuery,
  deleteVacationQuery,
  readVacationQuery,
  
  updateVacationQuery,
  updateLikeVacationByUserIdQuery,
} from "./query";

export async function addVacation({
  title,
  description,
  destination,
  imgUrl,
  checkInDate,
  checkOutDate,
  price,
}: IVacation) {
  //const query = createVacationQuery()

  try {
    const query = createVacationQuery();
    console.log({
      title,
      description,
      destination,
      imgUrl,
      checkInDate,
      checkOutDate,
      price,
    });

    const row = await getConnection().execute(query, [
      title,
      description,
      destination,
      imgUrl,
      checkInDate,
      checkOutDate,
      price,
      0,
    ]);
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
  console.log({ id });
  const query = deleteVacationQuery();
  try {
    await getConnection().execute(query, [Number(id)]);
    return true;
  } catch (error) {
    console.log("Error", error);
    return false;
  }
}

export async function updateVacation({
  checkInDate,
  checkOutDate,
  description,
  destination,
  imgUrl,
  price,
  title,
  vacation_id,
}: IVacation) {
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
      vacation_id,
    ]);
    return true;
  } catch (error) {
    console.log("Error", error);
    return false;
  }
}


export async function AddFollowersToVacationById({
  vacationId,
  userId,
}: {
  vacationId: number;
  userId: number;
}) {
  const query = updateLikeVacationByUserIdQuery();
  try {
    await getConnection().execute(query, [vacationId, userId]);
    return true;
  } catch (error) {
    console.log("error in ToggleLikeVacationById", error);
  }
}
