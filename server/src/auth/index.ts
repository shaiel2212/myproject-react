import { Router } from "express";
import { createJwt } from "..";
import { IUser, IUserDB } from "../Interface/IUser.interface";
const router = Router();

import { addUser, isUserExist } from "./businessLogic";
import { signToken } from "./helper";
import { isPasswordMatch } from "./validations";

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
  const token = await createJwt(user_name, isAdmin === "0" ? false : true);
  console.log({ token });
  return res.json({ userName, message: `Success Login`, token, isAdmin });
}

export async function registerHandler(
  req: any,
  res: any,
  next: any
): Promise<{ newUser: IUserDB; message: string } | { message: string }> {
  const { userName, firstName, lastName, password } = req.body;
  if (!userName || !firstName || !lastName || !password)
    return res.json({ massage: "ERROR fields " });
  const payload = { userName, firstName, lastName, password };
  try {
    const isUser: IUserDB = await isUserExist(userName);
    if (isUser) return res.status(401).send("Username already exists");
    const newUser = await addUser(payload);
    console.log({ newUser });
    return res.send({ message: `Success To Register ` });
  } catch (err) {
    return res.status(401).send({ massage: "ERROR on Register " });
  }
}

export default router;
