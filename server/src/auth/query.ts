export function getUserByUserName(userName: string) {
    const query =  `
    SELECT * FROM users WHERE user_name = ?
    `;
    return query
}

export function addUserQuery() {
    const query = (`INSERT INTO users (user_name, first_name, last_name, password, isAdmin) VALUES (?,?,?,?,?);`);
    return query
}