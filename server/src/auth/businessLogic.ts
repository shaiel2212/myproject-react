import { getConnection } from "../../db";
import bcrypt from "bcrypt"
const { NUMBER_OF_OLD_PASSWORDS } = process.env;
async function isUserExist(userName: any) {
    const query = `
  SELECT * FROM vacationSite.users WHERE user_name = ?
  `;

    const [result] = await getConnection().execute(query, [userName]);
    return result[0];
}

async function addUser(user: any) {
    const { userName, firstName, lastName, password } = user
    const isAdmin = 0;
    const addUserQuery = (`INSERT INTO vacationSite.users (user_name, first_name, last_name, password, isAdmin) VALUES (?,?,?,?,0);`);
    const newPassword = await hashPassword(password)
    try {
        console.log("before get conection")
        const row = await getConnection().execute(addUserQuery, [userName, firstName, lastName, newPassword, isAdmin]);
        return row
    }catch(ex) {
        console.log(ex)
        return null
    }
}

async function hashPassword(password: string) {
    const saltRounds = 10;
    const newPassword = await bcrypt.hash(password, saltRounds)
    console.log("New password", newPassword)
    return newPassword
}

// async function validateOldPassword({
//   userName,
//   newPassword,
// }: {
//   userName: string;
//   newPassword: string;
// }) {
//   const query = `
//     SELECT 
//     email_address, password
// FROM
//     (SELECT 
//         employee_id,
//             employees_credentials.password,
//             email_address,
//             employees_credentials.created_at
//     FROM
//         employees
//     JOIN employees_credentials ON employees.id = employees_credentials.employee_id
//     ORDER BY employees_credentials.created_at DESC
//     LIMIT ${NUMBER_OF_OLD_PASSWORDS}) AS resultTable
// WHERE
//     email_address = '${userName}'
//         AND password = '${newPassword}'

// `;
//   console.log(query);
//   const [result] = await getConnection().query(query);
//   return result[0];
// }

// async function insertPassword({
//   userId,
//   newPassword,
// }: {
//   userId: number;
//   newPassword: string;
// }) {
//   const query = `INSERT INTO northwind.employees_credentials 
//   (employee_id, password) VALUES (${userId},'${newPassword}')`;

//   console.log(query);
//   const [result] = await getConnection().query(query);
//   console.log(result);
//   return result[0];
// }

module.exports = {
    //   insertPassword,
    addUser,
    isUserExist,
    //   validateOldPassword,
}