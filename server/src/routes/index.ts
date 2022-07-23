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
router.delete("/vacations/:id", deleteVacationHandler);
router.put("/vacations/:id", updateVacationHandler);
router.post("/login", loginHandler);
router.post("/logout", logoutHandler);
router.post("/register", registerHandler);
export default router;
