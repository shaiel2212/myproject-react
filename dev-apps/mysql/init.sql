CREATE SCHEMA `vacation-app`;

CREATE TABLE `vacation-app`.`vacations` (
  `vacation_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `destination` VARCHAR(255) NOT NULL,
  `imgUrl` VARCHAR(255) NOT NULL,
  `checkInDate` VARCHAR(255) NOT NULL,
  `checkOutDate` VARCHAR(255) NOT NULL,
  `price` INT NOT NULL,
  `numberOfFollowers` INT NOT NULL  default 0,
  PRIMARY KEY (`vacation_id`));

INSERT INTO `vacation-app`.`vacations` (`title`, `description`, `destination`, `imgUrl`, `checkInDate`, `checkOutDate`, `price`, `numberOfFollowers`) VALUES ('some title1', 'some desc', 'some dest', 'some ImgUrl', '2022-07-16', '2022-07-20', '1250', '0');
INSERT INTO `vacation-app`.`vacations` (`title`, `description`, `destination`, `imgUrl`, `checkInDate`, `checkOutDate`, `price`, `numberOfFollowers`) VALUES ('some title2', 'some desc', 'some dest', 'some ImgUrl', '2022-07-22', '2022-07-23', '1420', '0');
INSERT INTO `vacation-app`.`vacations` (`title`, `description`, `destination`, `imgUrl`, `checkInDate`, `checkOutDate`, `price`, `numberOfFollowers`) VALUES ('some title3', 'some desc', 'some dest', 'some ImgUrl', '2022-07-22', '2022-07-23', '1300', '0');

CREATE TABLE `vacation-app`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `isAdmin` INT NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `vacation-app`.`users` (`user_name`, `first_name`, `last_name`, `password`, `isAdmin`) VALUES ('shaiel12', 'shaiel', 'raz noga', '123', '1');

CREATE TABLE `vacation-app`.`vacationPerUser` (
  `vacationId` INT NOT NULL,
  `userId` INT NOT NULL,
  PRIMARY KEY (`vacationId`, `userId`),
  INDEX `userIdMatch_id` (`userId` ASC) VISIBLE,
  CONSTRAINT `userIdMatch`
    FOREIGN KEY (`userId`)
    REFERENCES `vacation-app`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `vacationIdMatch`
    FOREIGN KEY (`vacationId`)
    REFERENCES `vacation-app`.`vacations` (`vacation_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

    INSERT INTO `vacation-app`.`vacationPerUser` (`vacationId`, `userId`) VALUES ('1', '1');
INSERT INTO `vacation-app`.`vacationPerUser` (`vacationId`, `userId`) VALUES ('2', '1');
INSERT INTO `vacation-app`.`vacationPerUser` (`vacationId`, `userId`) VALUES ('3', '1');
