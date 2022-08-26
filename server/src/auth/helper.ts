import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
const SECRET: any = process.env.SECRET;
export function signToken(obj: {
  first_name: string;
  last_name: string;
  user_name: string;
  id: number;
}): string {
  const token = jwt.sign(
    {
      data: {
        ...obj,
     
        role: "viewer",
      },
    },
    SECRET,
    { expiresIn: "10h" }
  );

  return token;
}
