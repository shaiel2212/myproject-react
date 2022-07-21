import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { initDB } from "../db"
import loginRouter from "./auth/index"
import registerRouter from "./auth/index"
import vacationRouter from "./vacations/index"

initDB()

const port = process.env.PORT
console.log(port)

const app = express()
app.use(cors())
app.use(bodyParser.json())


app.get("/healthcheck", async (req, res) => {
  return res.send("Api is working!");
});

app.use(loginRouter)
app.use(registerRouter)
app.use(vacationRouter)

app.listen(port || 5000, () => {
  console.log(`Server Running on Port ${port}`)
})