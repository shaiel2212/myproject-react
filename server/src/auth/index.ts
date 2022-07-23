import { Router } from "express";
import { IUser, IUserDB } from "../Interface/IUser.interface";
const router = Router();

import { addUser, isUserExist } from "./businessLogic";
import { signToken } from "./helper";
import { isPasswordMatch, removeSession } from "./validations";

export async function logoutHandler(
  req: any,
  res: any
): Promise<{ message: string }> {
  const authorizationHeader = req.headers["authorization"];
  if (!authorizationHeader) return res.status(400).json();
  try {
    const success = removeSession(authorizationHeader);
    if (!success)
      return res.status(400).json({
        message: "Failed to remove Session",
      });
    res.json({ message: "user logged out" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "ERROR" });
  }
}

export async function loginHandler(
  req: any,
  res: any,
  next: any
): Promise<IUserDB> {
  const { userName, password } = req.body;

  const currentUser: IUserDB = await isUserExist(userName);

  if (!currentUser) return res.status(404).send("User not found");

  const isPassword = await isPasswordMatch(currentUser, password);

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

export async function registerHandler(
  req: any,
  res: any,
  next: any
): Promise<{ newUser: IUserDB; message: string } | { message: string }> {
  const { userName, firstName, lastName, password } = req.body;
  const payload = { userName, firstName, lastName, password };
  try {
    const isUser: IUserDB = await isUserExist(userName);
    if (isUser) return res.status(401).send("Username already exists");
    const newUser = await addUser(payload);
    return res.json({ newUser, message: `Success To Register ` });
  } catch (err) {
    return res.status(401).send({ massage: "ERROR on Register " });
  }
}

export default router;
