-- insert data, example 1 (`customers` entity)
INSERT INTO `customers` (lastName, firstName, phoneNumber)
VALUES (:lastNameInput, :firstNameInput, :phoneNumberInput)

-- insert data, example 2 (`orders` entity)
INSERT INTO `orders` (customerNum, orderDate, paymentType)
VALUES (:customerNumFromDropdownInput, :orderDateInput, :paymentTypeInput)

-- insert data, example 3 (`keyboardOrders` entity)
-- inserting into table that organizes m:m relationship between keyboards and orders
INSERT INTO `keyboardOrders` (orderNum, keyboardNum, quantityOrdered, pricePerUnit)
VALUES (:orderNumFromDropdownInput, :keyBoardNumFromDropdownInput, :quantityInput, :priceInput)

-- insert data, example 4 (`keyboards` entity)
-- inserting into table with two foreign keys, switchNum being an optional relationship
INSERT INTO `keyboards` (name, quantityInStock, switchNum, keyColorNum)
VALUES (:nameInput, :quantityInput, :switchNumFromDropdownInput, :keyColorNumFromDropdownInput)

-- insert data, example 5 (`switches` entity)
INSERT INTO `switches` (switchName)
VALUES (:switchNameInput)

-- insert data, example 6 (`keyColors` entity)
INSERT INTO `keyColors` (keyColorName)
VALUES (:keyColorNameInput)




-- select data, example 1 (`customers` entity)
-- getting all names of customers
SELECT :firstNameInputFilter, :lastNameInputFilter
FROM `customers` 

-- select data, example 2 (`orders` entity)
-- getting all orders from certain day
SELECT :orderNumInputFilter
FROM `customers` 
WHERE orderDate=:dateInput

-- select data, example 3 (`keyBoardOrders` entity)
-- getting quantityOrdered for orderNum and keyboardNum
SELECT :quantityOrderedInputFilter
FROM `keyboardOrders`
WHERE orderNum=:orderNumInput AND keyboardNum=:keyboardNumInput

-- select data, example 4 (`keyboards` entity)
-- checking stock for certain keyboard configuration
SELECT quantityInStock
FROM `keyboards` 
WHERE name = :nameInput;

-- select data, example 5 (`switches` entity)
-- checking name for switchNum
SELECT switchName
FROM `switches` 
WHERE switchNum = :switchNumInput;

-- select data, example 6 (`keyColors` entity)
-- checking name for keyColorNum
SELECT keyColorName
FROM `keyColors` 
WHERE keyColorNum = :keyColorNumInput;




-- update data, example 1 (`customers` entity)
-- get rid of phone number for customer
UPDATE `customers`
SET phoneNumber = NULL
WHERE lastName = :lastNameInput AND firstName = :firstNameInput;

-- update data, example 2 (`orders` entity)
-- change date on an order
UPDATE `orders`
SET orderDate = :orderDateInput
WHERE orderNum = :orderNumInput

-- update data, example 3 (`keyboardOrders` entity)
-- change quantityOrdered on an order of certain keyboard
UPDATE `keyboardOrders`
SET quantityOrdered = :quantityOrderedInput
WHERE orderNum = :orderNumInput AND keyboardNum = :keyboardNumInput

-- update data, example 4 (`keyboards` entity)
-- change quantityInStock for a keyboard
UPDATE `keyboards`
SET quantityInStock = :quantityInStockInput
WHERE keyboardNum = :keyboardNumInput

-- update data, example 5 (`switches` entity)
-- changing name of keySwitches, not recommended once table is filled since it will update
-- corresponding FK in keyboards entity, which may or may not reflect key switches in that keyboard
UPDATE `switches`
SET switchName = :switchNameInput
WHERE switchName = :switchNameInput;

-- update data, example 6 (`keyColors` entity)
-- changing name of keyColors, not recommended once table is filled since it will update
-- corresponding FK in keyboards entity, which may or may not reflect key colors in that keyboard
UPDATE `keyColors`
SET keyColorsName = :keyColorsNameInput
WHERE keyColorsName = :keyColorsNameInput;




-- delete data, example 1 (`customers` entity)
-- in this situation, the parent is getting deleted
-- when customer is deleted, all orders connected to that customer are too because of the FK
DELETE FROM `customers` WHERE customerNum = :customerNumInput;

-- delete data, example 2 (`orders` entity)
-- deleting an order, nothing else affected
DELETE FROM `orders` WHERE orderNum = :orderNumInput;

-- delete data, example 3 (`keyboardOrders` entity)
DELETE FROM `keyboardOrders` 
WHERE orderNum = :orderNumInput AND keyboardNum = :keyboardNumInput;

-- delete data, example 4 (`keyboards` entity)
-- the parent is not deleted in this case
-- when a keyboard is deleted, the switchNum and keyColorNum are not deleted
DELETE FROM `keyboards` WHERE name = :nameInput;

-- delete data, example 5 (`switches` entity)
DELETE FROM `switches` WHERE switchName = :switchNameInput;

-- delete data, example 6 (`keyColors` entity)
DELETE FROM `keyColors` WHERE keyColorName = :keyColorNameInput;