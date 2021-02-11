----- add dummy data into customers
-- VALUES (lastName, firstName, phoneNumber)	// customerNum is a PK
INSERT INTO customers (fname, lname, homeworld, age)
VALUES ("Tapia", "Angel", NULL),
	   ("Davis", "Ryan", "8583495076"),
	   ("Pog", "Champ", "3404206969");


----- add dummy data into switches
-- VALUES (typeName)	// switchNum is a PK
-- Red, Blue, Brown, Black
INSERT INTO switches (typeName)
VALUES ("red"),
	   ("blue"),
	   ("brown"),
	   ("black");


----- add dummy data into keyColors
-- VALUES (keyColorName)	// keyColorNum is a PK
INSERT INTO keyColors (keyColorName)
VALUES ("red"),
	   ("white"),
	   ("gray"),
	   ("black"),
	   ("gray");


----- add dummy data into orders
-- VALUES (customerNum, orderDate, paymentType)	// orderNum is a PK
INSERT INTO orders (customerNum, orderDate, paymentType)
VALUES (1, "2021-02-10", 0),
	   (2, "2021-01-01", 1),
	   (3, "1969-06-09", 2);


----- add dummy data into keyboards
-- VALUES (name, quantityInStock, switchNum, keyColorNum)	// keyboardNum is a PK
INSERT INTO keyboards (name, quantityInStock, switchNum, keyColorNum)
VALUES ("Flaming Hot Cheeto", 100, 1, 1),
	   ("Black and Blue", 75, 2, 4),
	   ("Monochrome", 75, 4, 2),
	   ("Foggy Marsh", 50, 3, 5);


----- add dummy data into keyboardOrders
-- VALUES (orderNum, keyboardNum, quantityOrdered, pricePerUnit)	// PK is combo of orderNum & keyboardNum
INSERT INTO keyboardOrders (orderNum, keyboardNum, quantityOrdered, pricePerUnit)
VALUES (1, 1, 2, 500.00),
	   (2, 3, 1, 300.00),
	   (3, 1, 50, 500.00);
