import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });
const SECRET: any = process.env.SECRET;

export default function verifyToken(req: any, res: any, next: any) {
  const authorization = req?.headers?.authorization;
  jwt.verify(authorization, SECRET, (err: any, decoded: any) => {
    if (err) {
      return next({ ...err, status: 401 });
    } else {
      req.userData = decoded?.data;

      console.log(req.userData);

      return next();
    }
  });
}
