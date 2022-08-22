import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { initDB } from "../db";
import loginRouter from "./auth/index";
import registerRouter from "./auth/index";
import vacationV1 from "./routes/index";
import { expressjwt, Request as JWTRequest } from "express-jwt";
const verifyJwtMiddleware = expressjwt({
  secret: process.env.SECRET,
  algorithms: ["HS256"],
});

initDB();

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(
  verifyJwtMiddleware.unless({
    path: ["/register", "/login"],
  })
);
app.use(loginRouter);
app.use(registerRouter);

app.use(vacationV1);
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  }
});
app.listen(port || 5000, () => {
  console.log(`Server Running on Port ${port}`);
});
