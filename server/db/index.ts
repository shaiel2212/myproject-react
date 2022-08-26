import mysql2, { Connection } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const {
  MYSQL_DB_HOST: host,
  MYSQL_DB_PORT: port,
  MYSQL_DB_USER: user,
  MYSQL_DB_PASS: password,
  MYSQL_DB_SCHEMA: database,
} = process.env;
const config = { host, port, user, password, database };
let connection: Connection = null;

async function initDB() {

  try {
    connection = await mysql2.createConnection(config as unknown as string);
  } catch (error) {
  
    process.exit(1);
  }
}

function getConnection() {
  return connection;
}

export { initDB, getConnection };
