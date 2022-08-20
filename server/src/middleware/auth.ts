import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { signToken } from "../auth/helper";
import { getUserByUserName } from "../auth/query";
import { getDetailsByUserName } from "../auth/businessLogic";
import { response } from "express";

dotenv.config({ path: "../../.env" });
const SECRET: any = process.env.SECRET;

export default async function verifyToken(req: any, res: any, next: any) {
  const authorization = req?.headers?.authorization.split(" ")[1];

  jwt.verify(authorization, SECRET, async (err: any, decoded: any) => {
    if (err) {
      return res.status(401);
    } else {
      req.userData = decoded?.data;
      const [getUserDetails]: any = await getDetailsByUserName(
        req?.userData?.user_name
      );
      const createNewToken = signToken(req.userData);
      const { user_name, isAdmin } = getUserDetails;
      return res.send({
        userName: user_name,
        isAdmin,
        message: "Success Login",
        token: createNewToken,
      });
    }
  });
}
// {
//   "userName": "shaiel12",
//   "message": "Success Login",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImZpcnN0X25hbWUiOiJzaGFpZWwiLCJsYXN0X25hbWUiOiJyYXogbm9nYSIsInVzZXJfbmFtZSI6InNoYWllbDEyIiwiaWQiOjEsInBhc3N3b3JkIjpudWxsLCJyb2xlIjoidmlld2VyIn0sImlhdCI6MTY2MTAyMjQzNCwiZXhwIjoxNjYxMDU4NDM0fQ.Z3YosE2Dt5EbYOJT3iuqvs-qxvU8pLXpN3cxU3xtP5E",
//   "isAdmin": 1
// }
