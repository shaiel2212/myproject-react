import express from "express";
import {
  addVacation,
  getVacations,
  deleteVacations,
  updateVacation,
} from "./bussinessLogic";
const router = express.Router();

router.post("/vacations", addVacationHandler);
router.get("/vacations", getVacationsHandler);
router.delete("/vacations/:id", deleteVacationHandler);
router.put("/vacations/:id", updateVacationHandler);

async function addVacationHandler(req: any, res: any, next: any) {
  try {
    console.log(req.body);
    const isSuccessCreatedVacations = await addVacation(req.body);
    if (!isSuccessCreatedVacations)
      res.status(400).send({ status: "failed to add Vacation" });
    return res.status(200).json({ message: "Vacation Added Successfully" });
  } catch (error) {
    return res.status(400).send(error);
  }
}

async function getVacationsHandler(req: any, res: any, next: any) {
  const vacations = await getVacations();

  return res.status(200).json(vacations);
}

async function deleteVacationHandler(req: any, res: any, next: any) {
  console.log(req.params); // { id : 5 }
  const result = await deleteVacations(req.params.id);
  return res.status(200).send({ success: true });
}

async function updateVacationHandler(req: any, res: any, next: any) {
  console.log(req.params); // { id : 5 }
  const result = await updateVacation(req.params.id);
  return res.status(200).send({ success: true });
}

export default router;
