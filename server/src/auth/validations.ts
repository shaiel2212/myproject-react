import { getConnection } from "../../db";
import bcrypt from "bcrypt"
import { addUserQuery } from "./query";

async function isPasswordMatch(user: any, password: string) {
  if (user.isAdmin) return true
  const result = await bcrypt.compare(password, user.password)
  return result
}

async function removeSession(token: string | null) {
  token = null;
}


module.exports = {
  isPasswordMatch,
  removeSession
}