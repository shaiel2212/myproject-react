const addVacationQuery = (): string => {
return  (`INSERT INTO vacations (title, desc, destination, imgUrl, checkInDate, checkOutDate, price, numberOfFollowers) VALUES (?,?,?,?,?,?,?,?);`);


}

const getVacationQuery = (): string => {
    return  (`SELECT * FROM vacations`);
    
    }


export {addVacationQuery, getVacationQuery}