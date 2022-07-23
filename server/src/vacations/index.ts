import express from "express";
import { addVacation, getVacations , deleteVacations, updateVacation } from "./bussinessLogic"
const router = express.Router();



router.post("/vacations", addVacationHandler);
router.get("/vacations", getVacationsHandler);
router.delete("/vacations/:id" ,deleteVacationHandler )
router.put("/vacations/:id" ,updateVacationHandler )


async function addVacationHandler(req: any, res: any, next: any) {
    console.log(req.body)
    const newVacation = await addVacation(req.body)

    console.log("############",{newVacation})
    if(newVacation){
        return res.status(200).json({ message: "Vacation Added Successfuly" })
    }
    else {
        return res.status(400).send("Could notinsert new vacation")
    }
}

async function getVacationsHandler(req: any, res: any, next: any) {
    const vacations = await getVacations()
    console.log("getVacationsHandler",vacations)
    return res.status(200).json(vacations)
}

async function deleteVacationHandler(req: any, res: any, next: any) {
    console.log(req.params); // { id : 5 }
    const result = await deleteVacations(req.params.id)
    return  res.status(200).send({"success" : true})
    
}


async function updateVacationHandler(req: any, res: any, next: any) {
    console.log(req.params); // { id : 5 }
    const result = await updateVacation(req.params.id)
    return  res.status(200).send({"success" : true})
    
}



export default router;