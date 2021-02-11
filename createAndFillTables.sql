-- Create customers table
DROP TABLE IF EXISTS `customers`;

CREATE TABLE `customers`(
	`customerNum` INT(11) NOT NULL AUTO_INCREMENT,  
	`lastName` VARCHAR(255) NOT NULL, 
	`firstName` VARCHAR(255) NOT NULL, 
	`phoneNumber` VARCHAR(255) DEFAULT NULL,
	PRIMARY KEY (`customerNum`)
);


-- Create switches table
DROP TABLE IF EXISTS `switches`;

CREATE TABLE `switches`(
	`switchNum` INT(11) NOT NULL AUTO_INCREMENT,  
	`switchName` VARCHAR(255) NOT NULL, 
	PRIMARY KEY (`switchNum`)
);


-- Create keyColors table
DROP TABLE IF EXISTS `keyColors`;

CREATE TABLE `keyColors`(
	`keyColorNum` INT(11) NOT NULL AUTO_INCREMENT, 
	`keyColorName` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`keyColorNum`)
);


-- Create keyboards table
DROP TABLE IF EXISTS `keyboards`;

CREATE TABLE `keyboards`(
	`keyboardNum` INT(11)  NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,  
	`quantityInStock` INT(11)  NOT NULL, 
	`switchNum` INT(11), 
	`keyColorNum` INT(11) NOT NULL,
	PRIMARY KEY (`keyboardNum`), 
	FOREIGN KEY (`switchNum`)
	REFERENCES `switches`(`switchNum`)
	ON UPDATE CASCADE
	ON DELETE CASCADE, 
	FOREIGN KEY (`keyColorNum`)
	REFERENCES `keyColors`(`keyColorNum`)
	ON UPDATE CASCADE
	ON DELETE CASCADE
);


-- Create orders table
DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders`(
	`orderNum` INT(11) NOT NULL AUTO_INCREMENT,  
	`customerNum` INT(11) NOT NULL, 
	`orderDate` DATE NOT NULL, 
	`paymentType` INT(11) NOT NULL,
	PRIMARY KEY (`orderNum`),
	FOREIGN KEY (`customerNum`)
	REFERENCES `customers`(`customerNum`)
	ON UPDATE CASCADE
	ON DELETE CASCADE
);


-- Create keyboardOrders table
DROP TABLE IF EXISTS `keyboardOrders`;

CREATE TABLE `keyboardOrders`(
	`orderNum` INT(11) NOT NULL,
	`keyboardNum` INT(11) NOT NULL,  
	`quantityOrdered` INT(11) NOT NULL, 
	`pricePerUnit` DECIMAL(6,2) NOT NULL, 
	PRIMARY KEY (`orderNum`,`keyboardNum`), 
	FOREIGN KEY (`orderNum`)
	REFERENCES `orders`(`orderNum`)
	ON UPDATE CASCADE
	ON DELETE CASCADE, 
	FOREIGN KEY (`keyboardNum`)
	REFERENCES `keyboards`(`keyboardNum`)
	ON UPDATE CASCADE
	ON DELETE CASCADE
);


-- add dummy data into customers
INSERT INTO `customers` (lastName, firstName, phoneNumber)
VALUES ("Tapia", "Angel", NULL),
	   ("Davis", "Ryan", "8583495076"),
	   ("Champ", "Pog", "3404206969");


-- add dummy data into switches
INSERT INTO `switches` (switchName)
VALUES ("red"),
	   ("blue"),
	   ("brown"),
	   ("black");


-- add dummy data into keyColors
INSERT INTO `keyColors` (keyColorName)
VALUES ("red"),
	   ("white"),
	   ("gray"),
	   ("black"),
	   ("gray");


-- add dummy data into orders
INSERT INTO `orders` (customerNum, orderDate, paymentType)
VALUES (1, "2021-02-10", 0),
	   (2, "2021-01-01", 1),
	   (3, "1969-06-09", 2);


-- add dummy data into keyboards
INSERT INTO `keyboards` (name, quantityInStock, switchNum, keyColorNum)
VALUES ("Flaming Hot Cheeto", 100, 1, 1),
	   ("Black and Blue", 75, 2, 4),
	   ("Monochrome", 75, 4, 2),
	   ("Foggy Marsh", 50, 3, 5);


-- add dummy data into keyboardOrders
INSERT INTO keyboardOrders (orderNum, keyboardNum, quantityOrdered, pricePerUnit)
VALUES (1, 1, 2, 500.00),
	   (2, 3, 1, 300.00),
	   (3, 1, 50, 500.00);