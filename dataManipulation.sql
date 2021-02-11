-- update dummy data, example 1 (`keyboards` entity)
UPDATE keyboards
SET quantityInStock = 48
WHERE name = "Flaming Hot Cheeto";


-- update dummy data, example 2 (`orders` entity)
UPDATE orders
SET orderDate = "2021-09-25"
WHERE customerNum = 2;


-- update dummy data, example 3 (`customers` entity)
UPDATE customers
SET phoneNumber = NULL
WHERE lastName = "Champ" AND firstName = "Pog";