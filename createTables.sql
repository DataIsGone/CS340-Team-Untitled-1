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
	REFERENCES `switches`(`switchNum`), 
	FOREIGN KEY (`keyColorNum`)
	REFERENCES `keyColors`(`keyColorNum`)
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
	REFERENCES `orders`(`orderNum`), 
	FOREIGN KEY (`keyboardNum`)
	REFERENCES `keyboards`(`keyboardNum`)
);