import { getConnection } from "../../db";
import bcrypt from "bcrypt";
import { addUserQuery, getUserByUserName } from "./query";
import { IUser, IUserDB, Register } from "../Interface/IUser.interface";

export async function isUserExist(userName: string): Promise<IUserDB> {
  try {
    const query = getUserByUserName();

    const [[result]] = await getConnection().execute(query, [userName]);

    return result;
  } catch (error) {
    return null;
  }
}
export async function addUser(user: Register): Promise<IUserDB> {
  const { userName, firstName, lastName, password } = user;

  const isAdmin = 0;
  const query = addUserQuery();
  const newPassword = await hashPassword(password);
  try {
    const row = await getConnection().execute(query, [
      userName,
      firstName,
      lastName,
      newPassword,
      isAdmin,
    ]);
    return row;
  } catch (ex) {
    console.log(ex);
    return null;
  }
}

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const newPassword = await bcrypt.hash(password, saltRounds);
  return newPassword;
}
