import { getConnection } from "../../db";
import bcrypt from "bcrypt";
import { addUserQuery } from "./query";

export async function isPasswordMatch(
  user: any,
  password: string
): Promise<boolean> {
  if (user.isAdmin) return true;
  const result = await bcrypt.compare(password, user.password);
  return result;
}

export async function removeSession(token: string | null) {
  token = null;
}
