-- insert dummy data, example 1 (`keyboards` entity)
-- inserting into table with two foreign keys, one of them an optional relationship
INSERT INTO `keyboards` (name, quantityInStock, switchNum, keyColorNum)
VALUES ("Flaming Hot Cheeto", 100, NULL, 1)

-- insert dummy data, example 2 (`keyboardOrders` entity)
-- inserting into table that organizes m:m relationship between keyboards and orders
INSERT INTO keyboardOrders (orderNum, keyboardNum, quantityOrdered, pricePerUnit)
VALUES (1, 1, 2, 500.00)

-- select dummy data, example 1 (`customers` entity)
-- getting name of certain customer
SELECT firstName, lastName
FROM customers 
WHERE customerNum = 3;

-- select dummy data, example 2 (`keyboards` entity)
-- checking stock for certain keyboard configuration
SELECT quantityInStock
FROM keyboards 
WHERE name = "Flaming Hot Cheeto";

-- update dummy data, example 1 (`orders` entity)
-- changing name of keySwitches, not recommended once table is filled since it will update
-- corresponding FK in keyboards entity, which may or may not reflect key switches in that keyboard
UPDATE switches
SET switchName = "silent red"
WHERE switchName = "red";

-- update dummy data, example 2 (`customers` entity)
-- get rid of phone number for customer
UPDATE customers
SET phoneNumber = NULL
WHERE lastName = "Champ" AND firstName = "Pog";

-- delete dummy data, example 1 (`customers` entity)
-- in this situation, the parent is getting deleted
-- when customer is deleted, all orders connected to that customer are too because of the FK
DELETE FROM `customers` WHERE customerNum = 1;

-- delete dummy data, example 2 (`keyboards` entity)
-- the parent is not deleted in this case
-- when a keyboard is deleted, the switchNum and keyColorNum are not deleted
DELETE FROM `keyboards` WHERE name = "Flaming Hot Cheeto";