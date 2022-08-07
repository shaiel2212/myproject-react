import {
  addVacation,
  getVacations,
  deleteVacations,
  updateVacation,
} from "./bussinessLogic";

export async function addVacationHandler(req: any, res: any, next: any) {
  try {
    const isSuccessCreatedVacations = await addVacation(req.body);
    if (!isSuccessCreatedVacations)
      res.status(400).send({ status: "failed to add Vacation" });
    return res.status(200).json({ message: "Vacation Added Successfully" });
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
    const { id } = req.params;

    await deleteVacations(id);
    return res.status(200).send({ success: true, id });
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
    console.log(req.body);
    const { id } = req.params;
    const vacationPayload: IVacation = {
      title,
      description,
      destination,
      imgUrl,
      checkInDate,
      checkOutDate,
      price,
      vacation_id: id,
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
