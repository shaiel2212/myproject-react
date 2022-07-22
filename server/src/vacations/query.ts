// CRUD vacations
export const createVacationQuery = (): string => {
    return  (`INSERT INTO vacations (title, desciption, destination, imgUrl, checkInDate, checkOutDate, price, numberOfFollowers) VALUES (?,?,?,?,?,?,?,?);`);

}

export const readVacationQuery = (): string => {
    return  (`SELECT * FROM vacations`);
    
    }

export const updateVacationQuery = () => {
    
    //TODO
} 


export const deleteVacationQuery = () => {
    //TODO
} 

