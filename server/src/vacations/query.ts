
export const createVacationQuery = (): string => {
    return (`INSERT INTO vacations (title, description, destination, imgUrl, checkInDate, checkOutDate, price, numberOfFollowers) VALUES (?,?,?,?,?,?,?,?);`);

}

export const readVacationQuery = (): string => {
    return (`SELECT * FROM vacations`);

}
////////////////////////////////////////
export const updateVacationQuery = () : string => {
    return (`UPDATE vacations SET title ='sdf',description='sfdf',destination='dsf' ,imgUrl='sdfsd', checkInDate='?', checkOutDate='?', price='500' WHERE (vacation_id = '2');`)
//UPDATE `vacation-app`.`vacations` SET `description` = 'some desdfsc', `imgUrl` = 'some sdfImgUrl' WHERE (`vacation_id` = '3');

}


export const deleteVacationQuery = ():string => {
    return (`DELETE FROM vacations WHERE vacation_id = ?`);
}

