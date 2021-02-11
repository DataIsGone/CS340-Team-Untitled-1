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
