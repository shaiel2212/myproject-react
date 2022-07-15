import express from "express";
import { addVacation, getVacations } from "./bussinessLogic"
const router = express.Router();

router.post("/add-vacation", addVacationHandler);
router.get("/vacations", getVacationsHandler)

async function addVacationHandler(req: any, res: any, next: any) {
    console.log(req.body)
    const newVacation = await addVacation(req.body)
    console.log(newVacation)
    res.status(200).json({ message: "Vacation Added Successfuly" })
}

async function getVacationsHandler(req: any, res: any, next: any) {
    const vacations = await getVacations()
    return res.status(200).json(vacations)
}


export default router;