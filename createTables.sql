-- Create customers table
DROP TABLE IF EXISTS `customers`;

CREATE TABLE `customers`(
	`customerNum` INT(10) NOT NULL AUTO_INCREMENT,  
	`lastName` VARCHAR(255) NOT NULL, 
	`firstName` VARCHAR(255) NOT NULL, 
	`phoneNumber` VARCHAR(255) DEFAULT NULL,
	PRIMARY KEY (`customerNum`)
);

-- Create orders table
DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders`(
	`orderNum` INT NOT NULL AUTO_INCREMENT,  
	`customerNum` INT NOT NULL, 
	`orderDate` DATE NOT NULL, 
	`paymentType` INT NOT NULL,
	PRIMARY KEY (`orderNum`),
	FOREIGN KEY (`customerNum`)
	REFERENCES `customers`(`customerNum`)
);


-- Create keyboardOrders table
DROP TABLE IF EXISTS `keyboardOrders`;

CREATE TABLE `keyboardOrders`(
	`orderNum` INT NOT NULL,
	`keyboardNum` INT NOT NULL,  
	`quantityOrdered` INT NOT NULL, 
	`pricePerUnit` DECIMAL(6,2) NOT NULL, 
	PRIMARY KEY (`orderNum`,`keyboardNum`), 
	FOREIGN KEY (`orderNum`)
	REFERENCES `orders`(`orderNum`), 
	FOREIGN KEY (`keyboardNum`)
	REFERENCES `keyboards`(`keyboardNum`)
);

-- Create keyboards table
DROP TABLE IF EXISTS `keyboards`;

CREATE TABLE `keyboards`(
	`keyboardNum` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR NOT NULL,  
	`quantityInStock` INT NOT NULL, 
	`switchNum` INT, 
	`keyColorNum` INT, NOT NULL,
	PRIMARY KEY (`keyboardNum`), 
	FOREIGN KEY (`switchNum`)
	REFERENCES `switches`(`switchNum`), 
	FOREIGN KEY (`keyColorNum`)
	REFERENCES `keyColors`(`keyColorNum`)
);

-- Create switches table
DROP TABLE IF EXISTS `switches`;

CREATE TABLE `switches`(
	`switchNum` INT NOT NULL AUTO_INCREMENT,  
	`switchName` VARCHAR NOT NULL, 
	PRIMARY KEY (`switchNum`)
);

-- Create keyColors table
DROP TABLE IF EXISTS `keyColors`;

CREATE TABLE `keyColors`(
	`keyColorNum` INT NOT NULL AUTO_INCREMENT, 
	`keyColorName` VARCHAR NOT NULL,
	PRIMARY KEY (`switchNum`)
);