import mysql2, { Connection } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const config = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "11111111",
  database: "vacation-app",
};
let connection: Connection = null;

async function initDB() {
  try {
    connection = await mysql2.createConnection(config as unknown as string);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

function getConnection() {
  return connection;
}

export { initDB, getConnection };
