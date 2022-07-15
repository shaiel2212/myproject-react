import express from "express";
const router = express.Router();
const {
  isPasswordMatch,
  validateChangePasswordMiddleware,
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
// const { changeUserPassword } = require("./controller")

router.post("/login", loginHandler);
// router.post("/logout", logoutHandler);
router.post("/register", registerHandler);
// router.post(
//   "/change-password",
//   verifyToken,
//   validateChangePasswordMiddleware,
//   changePasswordHandler
// );

function logoutHandler(req: any, res: any) {
  const authorizationHeader = req.headers["authorization"];
  if (!authorizationHeader) return res.status(400).json();
  // const success = removeSession(authorizationHeader)
  // if (!success) return res.status(400).json()
  res.json({ message: "user logged out" });
}

async function loginHandler(req: any, res: any, next: any) {
  const { userName, password } = req.body;
  console.log(userName, "userName");
  const currentUser: any = await isUserExist(userName);
  console.log("hello", currentUser);
  if (!currentUser) return res.status(404).send("User not found");
  const isPassword = await isPasswordMatch(currentUser, password)
  if (!isPassword)
    return res.status(401).send("User not Authorized - Go to Hell!");
  // const { ONLY THE KEYS I WANT!!! } = currentUser
  const { user_name, first_name, last_name, id, isAdmin } = currentUser;
  const token = signToken({
    first_name,
    last_name,
    user_name,
    id,
  });
  return res.json({ userName, message: `Success`, token, isAdmin });
}

async function registerHandler(req: any, res: any, next: any) {
  const { userName, firstName, lastName, password } = req.body;
  try {
    const isUser = await isUserExist(userName)
    if (isUser) return res.status(401).send("user is already exist")
    const newUser = await addUser(req.body)
    return res.json({ userName, password, message: `Success` });
  } catch (ex) {
    console.log(ex)
  }


}

async function changePasswordHandler(req: any, res: any, next: any) {
  const { password, token, newPassword, newPasswordConfirm } = req.body;
  const userName = req?.userData?.email_address;
  if (!userName) return res.status(401).send("User Error");
  const currentUser = await isUserExist(userName);
  if (!currentUser) return res.status(404).send("User not found");

  if (!isPasswordMatch(currentUser, password))
    return res.status(401).send("User not Authorized - Go to Hell!");
  if (newPassword !== newPasswordConfirm)
    return res.status(409).send("Password confirm not match");
  if (await validateOldPassword({ userName, newPassword })) {
    return res
      .status(409)
      .send("New password cannot be the same as your old password");
  }
  console.log(newPassword);
  const result = await insertPassword({
    userId: currentUser.employee_id,
    newPassword,
  });
  res.send("ok");
}

function validateParams(req: any, res: any, next: any) {
  const { password, userName, newPassword, newPasswordConfirm } = req.body;
  if (!password || !userName || !newPassword || !newPasswordConfirm)
    return res.status(400).send("missing paramters");
  next();
}

export default router;