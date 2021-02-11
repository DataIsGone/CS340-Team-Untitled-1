-- Drop all tables if they exist

DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS keyboardOrders;
DROP TABLE IF EXISTS keyboards;
DROP TABLE IF EXISTS switches;
DROP TABLE IF EXISTS keyColors;

-- Create customers table

CREATE TABLE customers
(customerNum INT(10) NOT NULL AUTO_INCREMENT,  
lastName VARCHAR(255) NOT NULL, 
firstName VARCHAR(255) NOT NULL, 
phoneNumber VARCHAR(255) DEFAULT NULL,
PRIMARY KEY (customerNum)
);

-- Create orders table

CREATE TABLE orders
(orderNum INT NOT NULL AUTO_INCREMENT,  
customerNum INT NOT NULL, 
orderDate DATE NOT NULL, 
paymentType INT NOT NULL,
PRIMARY KEY (orderNum),
FOREIGN KEY (customerNum)
REFERENCES customers(customerNum)
	ON UPDATE CASCADE
	ON DELETE RESTRICT
);


-- Create keyboardOrders table

CREATE TABLE keyboardOrders
(orderNum INT NOT NULL,
keyboardNum INT NOT NULL,  
quantityOrdered INT NOT NULL, 
pricePerUnit DECIMAL(6,2) NOT NULL, 
PRIMARY KEY (orderNum,customerNum), 
FOREIGN KEY (orderNum),
REFERENCES orders(orderNum)
	ON UPDATE CASCADE
	ON DELETE RESTRICT, 
FOREIGN KEY (keyboardNum)
REFERENCES keyboards(keyboardNum)
	ON UPDATE CASCADE
	ON DELETE RESTRICT
);

-- Create keyboards table

CREATE TABLE keyboards
(keyboardNum INT NOT NULL AUTO_INCREMENT,
name VARCHAR NOT NULL,  
quantityInStock INT NOT NULL, 
switchNum INT, 
keyColorNum INT, NOT NULL,
PRIMARY KEY (keyboardNum), 
FOREIGN KEY (switchNum)
REFERENCES switches(switchNum)
	ON UPDATE CASCADE
	ON DELETE RESTRICT, 
FOREIGN KEY (keyColorNum)
REFERENCES keyColors(keyColorNum)
	ON UPDATE CASCADE
	ON DELETE RESTRICT
);

-- Create switches table

CREATE TABLE switches
(switchNum INT NOT NULL AUTO_INCREMENT,  
switchName VARCHAR NOT NULL, 
PRIMARY KEY (switchNum)
);

-- Create keyColors table

CREATE TABLE keyColors
(keyColorNum INT NOT NULL AUTO_INCREMENT, 
keyColorName VARCHAR NOT NULL,
PRIMARY KEY (switchNum)
);