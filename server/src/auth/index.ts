import express from "express";
const router = express.Router();
const {
  isPasswordMatch,
  removeSession,
} = require("./validations");

const {
  isUserExist,
  addUser,
  validateOldPassword,
  insertPassword,
} = require("./businessLogic");
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/auth";
import { signToken } from "./helper";

router.post("/login", loginHandler);
router.post("/logout", logoutHandler);
router.post("/register", registerHandler);


function logoutHandler(req: any, res: any) {
  const authorizationHeader = req.headers["authorization"];
  if (!authorizationHeader) return res.status(400).json();
  try {
    const success = removeSession(authorizationHeader)
    if (!success) return res.status(400).json()
    res.json({ message: "user logged out" });
  } catch (err) {
    console.log(err)
  }

}



async function loginHandler(req: any, res: any, next: any) {
  const { userName, password } = req.body;

    const currentUser: any = await isUserExist(userName);
    if (!currentUser) return res.status(404).send("User not found");
    const isPassword = await isPasswordMatch(currentUser, password)
    if (!isPassword)
      return res.status(401).send("User not Authorized - Go to Hell!");
    const { user_name, first_name, last_name, id, isAdmin } = currentUser;
    const token = signToken({
      first_name,
      last_name,
      user_name,
      id,
    });
    return res.json({ userName, message: `Success Login`, token, isAdmin });
  

}

async function registerHandler(req: any, res: any, next: any) {
  const { userName, firstName, lastName, password } = req.body;
  try {
    const isUser = await isUserExist(userName)
    if (isUser) return res.status(401).send("Username already exists")
    const newUser = await addUser(req.body)
    return res.json({ userName, password, message: `Success` });
  } catch (ex) {
    console.log(ex)
  }


}


export default router;