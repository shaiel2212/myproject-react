import { getConnection } from "../../db";
import bcrypt from "bcrypt"
import { addUserQuery, getUserByUserName } from "./query";


async function isUserExist(userName: any) {
    const query = getUserByUserName(userName)
    const [result] = await getConnection().execute(query, [userName]);
    return result[0];
}
async function addUser(user: any) {
    const { userName, firstName, lastName, password } = user
    const isAdmin = 0;
    const query = addUserQuery()
    const newPassword = await hashPassword(password)
    try {
        const row = await getConnection().execute(query, [userName, firstName, lastName, newPassword, isAdmin]);
        return row
    }catch(ex) {
        console.log(ex)
        return null
    }
}

async function hashPassword(password: string) {
    const saltRounds = 10;
    const newPassword = await bcrypt.hash(password, saltRounds)
    return newPassword
}

module.exports = {
    addUser,
    isUserExist,
}