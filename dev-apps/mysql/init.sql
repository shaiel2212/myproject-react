CREATE SCHEMA `vacationSite`;

CREATE TABLE `vacationSite`.`vacations` (
  `vacation_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `destination` VARCHAR(255) NOT NULL,
  `img` VARCHAR(255) NOT NULL,
  `checkInDate` DATETIME NOT NULL,
  `checkOutDate` DATETIME NOT NULL,
  `price` INT NOT NULL,
  `numberOfFollowers` INT NOT NULL,
  PRIMARY KEY (`vacation_id`));

INSERT INTO `vacationSite`.`vacations` (`title`, `description`, `destination`, `img`, `checkInDate`, `checkOutDate`, `price`, `numberOfFollowers`) VALUES ('asd', 'asd', 'asd', 'asd', '2022-07-22', '2022-07-23', '1200', '0');
INSERT INTO `vacationSite`.`vacations` (`title`, `description`, `destination`, `img`, `checkInDate`, `checkOutDate`, `price`, `numberOfFollowers`) VALUES ('asd', 'asd', 'asd', 'asd', '2022-07-22', '2022-07-23', '1500', '0');
INSERT INTO `vacationSite`.`vacations` (`title`, `description`, `destination`, `img`, `checkInDate`, `checkOutDate`, `price`, `numberOfFollowers`) VALUES ('asd', 'asd', 'asd', 'asd', '2022-07-22', '2022-07-23', '2000', '0');

CREATE TABLE `vacationSite`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `isAdmin` INT NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `vacationSite`.`users` (`user_name`, `first_name`, `last_name`, `password`, `isAdmin`) VALUES ('AlonKz', 'Alon', 'Katz', '123', '1');

CREATE TABLE `vacationSite`.`vacationPerUser` (
  `vacationId` INT NOT NULL,
  `userId` INT NOT NULL,
  PRIMARY KEY (`vacationId`, `userId`),
  INDEX `userIdMatch_idx` (`userId` ASC) VISIBLE,
  CONSTRAINT `userIdMatch`
    FOREIGN KEY (`userId`)
    REFERENCES `vacationSite`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `vacationIdMatch`
    FOREIGN KEY (`vacationId`)
    REFERENCES `vacationSite`.`vacations` (`vacation_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

    INSERT INTO `vacationSite`.`vacationPerUser` (`vacationId`, `userId`) VALUES ('1', '1');
INSERT INTO `vacationSite`.`vacationPerUser` (`vacationId`, `userId`) VALUES ('2', '1');
INSERT INTO `vacationSite`.`vacationPerUser` (`vacationId`, `userId`) VALUES ('3', '1');

-- Get Vacations Per User Query :
-- SELECT * FROM vacationSite.vacationPerUser INNER JOIN vacationSite.vacations WHERE userId = 2 AND vacation_id = vacationId







