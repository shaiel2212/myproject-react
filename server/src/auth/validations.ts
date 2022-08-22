import { getConnection } from "../../db";
import bcrypt from "bcrypt";
import { addUserQuery } from "./query";

export async function isPasswordMatch(
  user: any,
  password: string
): Promise<boolean> {
  const result = await bcrypt.compare(password, user.password);
  return result;
}
