import express from "express";
import { addVacation, getVacations } from "./bussinessLogic"
const router = express.Router();



router.post("/vacations", addVacationHandler);
router.get("/vacations", getVacationsHandler)

async function addVacationHandler(req: any, res: any, next: any) {
    console.log(req.body)
    const newVacation = await addVacation(req.body)

    if(newVacation){
        return res.status(200).json({ message: "Vacation Added Successfuly" })
    }
    else {
        return res.status(500).send("Could notinsert new vacation")
    }
}

async function getVacationsHandler(req: any, res: any, next: any) {
    const vacations = await getVacations()
    console.log("getVacationsHandler",vacations)
    return res.status(200).json(vacations)
}


export default router;