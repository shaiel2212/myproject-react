
export const createVacationQuery = (): string => {
    return (`INSERT INTO vacations (title, description, destination, imgUrl, checkInDate, checkOutDate, price, numberOfFollowers) VALUES (?,?,?,?,?,?,?,?);`);

}

export const readVacationQuery = (): string => {
    return (`SELECT * FROM vacations`);

}
////////////////////////////////////////
export const updateVacationQuery = () : string => {
    // return (`UPDATE vacations SET title ='xcxc',description='?',destination='?' ,imgUrl='?', checkInDate='?', checkOutDate='?', price='?',  WHERE (vacation_id = '18');`)
    return (`UPDATE vacations SET title = ?, description = ?, destination = ?, imgUrl = ?, checkInDate = ?, checkOutDate = ?, price=? WHERE (vacation_id = ?);
    `)
//
}


export const deleteVacationQuery = ():string => {
    return (`DELETE FROM vacations WHERE vacation_id = ?`);
}

