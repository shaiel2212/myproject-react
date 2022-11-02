import { Request, Response } from "express";
import {
  addVacation,
  getVacations,
  deleteVacations,
  updateVacation,
  AddFollowersToVacationById,
} from "./bussinessLogic";
import { updateLikeVacationByUserIdQuery } from "./query";

export async function addVacationHandler(req: any, res: any, next: any) {
  try {
    const isSuccessCreatedVacations = await addVacation(req.body);
    if (!isSuccessCreatedVacations)
      res.status(400).send({ status: "failed to add Vacation" });
    const vacations = await getVacations();
    return res.status(200).send(vacations);
  } catch (error) {
    return res.status(400).send(error);
  }
}

export async function getVacationsHandler(req: any, res: any, next: any) {
  try {
    const vacations = await getVacations();

    return res.status(200).json(vacations);
  } catch (error) {
    return res.status(200).send([]);
  }
}

export async function deleteVacationHandler(req: any, res: any, next: any) {
  try {
    const { vacation_id } = req.params;

    const isDeleted = await deleteVacations(vacation_id);

    return res.status(200).send({ success: isDeleted, vacation_id });
  } catch (error) {
    return res
      .status(200)
      .send({ success: false, message: "Failed to delete" });
  }
}

export async function updateVacationHandler(req: any, res: any, next: any) {
  try {
    const {
      title,
      description,
      destination,
      imgUrl,
      checkInDate,
      checkOutDate,
      price,
    } = req.body;

    const { vacation_id } = req.params;
    const vacationPayload: IVacation = {
      title,
      description,
      destination,
      imgUrl,
      checkInDate,
      checkOutDate,
      price,
      vacation_id,
    };
    const updateSuccess = await updateVacation(vacationPayload);
    if (updateSuccess) {
      const vacations = await getVacations();
      return res.status(200).send(vacations);
    }
  } catch (error) {
    return res
      .status(200)
      .send({ success: false, message: "Failed to Update" });
  }
}

export async function updateFollowerVacation(
  req: Request,
  res: Response,
  next: any
) {
  const { vacationId, userId } = req.body;

  try {
    await AddFollowersToVacationById({ userId, vacationId });
    res.send("ok");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}
