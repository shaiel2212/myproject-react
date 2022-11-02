import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { initDB } from "../db";
import loginRouter from "./auth/index";
import registerRouter from "./auth/index";
import vacationV1 from "./routes/index";
import verifyToken from "./middleware/auth";
import { promisify } from "util";

import jsonwebtoken from "jsonwebtoken";
import expressJwt, { expressjwt } from "express-jwt";
const promiseFideSing = promisify(jsonwebtoken.sign);

const app = express();
initDB();
app.use(cors());
app.use(bodyParser.json());
export async function createJwt(userName: string, isAdmin: boolean) {
  return await promiseFideSing({ userName, isAdmin }, process.env.SECRET);
}
// const verifyJwtMiddleware = expressjwt({
//   secret: process.env.SECRET,
//   algorithms: ["HS256"],
// });

const port = process.env.PORT;
// app.use(
//   verifyJwtMiddleware.unless({
//     path: ["/register", "/login"],
//   })
// );

app.use(loginRouter);
app.use(registerRouter);

app.use(vacationV1);
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  }
});

app.listen(port || 5000, async () => {
  console.log("server listening on port " + port);
});
