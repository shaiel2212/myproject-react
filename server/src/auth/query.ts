export function getUserByUserName():string {
  return `
    SELECT * FROM users WHERE user_name = ?
    `;
}

export function addUserQuery():string {
  return `INSERT INTO users (user_name, first_name, last_name, password, isAdmin) VALUES (?,?,?,?,?);`;
}
