
import bcrypt from "bcrypt";

export async function isPasswordMatch(
  user: any,
  password: string
): Promise<boolean> {
  const result = await bcrypt.compare(password, user.password);
  return result;
}
