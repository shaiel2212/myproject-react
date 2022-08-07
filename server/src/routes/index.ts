import { Router } from "express";
import { loginHandler, logoutHandler, registerHandler } from "../auth";
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
router.post("/login", loginHandler);
router.post("/logout", logoutHandler);
router.post("/register", registerHandler);
export default router;
