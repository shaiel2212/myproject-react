import { Router } from "express";
import { loginHandler, registerHandler } from "../auth";
import verifyToken from "../middleware/auth";
import {
  addVacationHandler,
  deleteVacationHandler,
  getVacationsHandler,
  updateVacationHandler,
} from "../vacations";
const router = Router();

router.post("/vacations", addVacationHandler);
router.get("/vacations", getVacationsHandler);
router.delete("/vacations/:vacation_id", deleteVacationHandler);
router.put("/vacations/:vacation_id", updateVacationHandler);
router.get("/verifyToken", verifyToken);
router.post("/login", loginHandler);

router.post("/register", registerHandler);
export default router;
