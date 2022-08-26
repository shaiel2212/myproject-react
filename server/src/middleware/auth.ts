import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { signToken } from "../auth/helper";
import { getUserByUserName } from "../auth/query";
import { getDetailsByUserName, isUserExist } from "../auth/businessLogic";
import { NextFunction, response } from "express";
import { handelDecodeJwt } from "../utils/decodedToken";
import { createJwt } from "..";
import { IUserDB } from "../Interface/IUser.interface";

dotenv.config({ path: "../../.env" });

export default async function verifyToken(
  req: any,
  res: any,
  next: NextFunction
) {
  const getJwt = req.header("authorization").split(" ")[1];

  const { payload }: any = await handelDecodeJwt(getJwt);
  const currentUser: IUserDB = await isUserExist(payload.userName);
  console.log({currentUser})
  const { isAdmin, first_name, last_name, user_name, id } = currentUser;
  const token = await createJwt(user_name, isAdmin === "0" ? false : true);
  res
    .status(200)
    .send({
      userName: user_name,
      message: "SSuccessfully authenticated",
      token,
      isAdmin,
    });
}
// {
//   "userName": "shaiel12",
//   "message": "Success Login",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImZpcnN0X25hbWUiOiJzaGFpZWwiLCJsYXN0X25hbWUiOiJyYXogbm9nYSIsInVzZXJfbmFtZSI6InNoYWllbDEyIiwiaWQiOjEsInBhc3N3b3JkIjpudWxsLCJyb2xlIjoidmlld2VyIn0sImlhdCI6MTY2MTAyMjQzNCwiZXhwIjoxNjYxMDU4NDM0fQ.Z3YosE2Dt5EbYOJT3iuqvs-qxvU8pLXpN3cxU3xtP5E",
//   "isAdmin": 1
// }
