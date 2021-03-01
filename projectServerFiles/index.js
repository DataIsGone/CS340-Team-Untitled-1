var express = require('express');
var mysql = require('./dbcon.js');
var CORS = require('cors');           

var app = express();
app.set('port', 21895);     
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(CORS()); 


// queries placed here for easier editing, place them where needed
// GET (READ)
const getCustomersQuery = 'SELECT * FROM customers';
const getOrdersQuery = 'SELECT * FROM orders';
const getKeyboardOrdersQuery = 'SELECT * FROM keyboardOrders';
const getKeyboardsQuery = 'SELECT * FROM keyboards';
const getSwitchesQuery = 'SELECT * FROM switches';
const getKeyColorsQuery = 'SELECT * FROM keyColors';
// INSERT (CREATE)
const insertCustomersQuery = "INSERT INTO customers (`firstName`,`lastName`,`phoneNumber`) VALUES (?,?,?)";
const insertOrdersQuery = "INSERT INTO orders (`customerNum`, `orderDate`, `paymentType`) VALUES (?,?,?)";
const insertKeyboardOrdersQuery = "INSERT INTO keyboardOrders (`orderNum`, `keyboardNum`, `quantityOrdered`, `pricePerUnit`) VALUES (?,?,?,?)";
const insertKeyboardsQuery = "INSERT INTO keyboards (`name`, `quantityInStock`, `switchNum`, `keyColorNum`) VALUES (?,?,?,?)";
const insertSwitchesQuery = "INSERT INTO switches (`switchName`) VALUES (?)";
const insertKeyColorsQuery = "INSERT INTO keyColors (`keyColorName`) VALUES (?)";
/* const updateQuery = "UPDATE workout SET name=?,reps=?,weight=?,unit=?,date=? WHERE id=? "; */

// DELETE
const deleteCustomersQuery = "DELETE FROM customers WHERE id=?";
const deleteOrdersQuery = "DELETE FROM orders WHERE id=?";
const deleteKeyboardOrdersQuery = "DELETE FROM keyboardOrders WHERE id=?";
const deleteKeyboardsQuery = "DELETE FROM keyboards WHERE id=?";
const deleteSwitchesQuery = "DELETE FROM switches WHERE id=?";
const deleteKeyColorsQuery = "DELETE FROM keyColors WHERE id=?";

// GENERAL TABLE QUERIES
/* const dropTableQuery = "DROP TABLE IF EXISTS customers";
const makeTableQuery = `CREATE TABLE customers(
	                      customerNum INT(11) NOT NULL AUTO_INCREMENT,  
	                      lastName  VARCHAR(255) NOT NULL, 
	                      firstName VARCHAR(255) NOT NULL, 
	                      phoneNumber VARCHAR(255) DEFAULT NULL,
	                      PRIMARY KEY (customerNum)
                        )`; */
                    

const getData = (query, res) => { 
  mysql.pool.query(query, (err, rows, fields) => {
    if (err){
      next(err);
      return;
    }
    res.json({"rows":rows});
    console.log("query2");
  })
}

// new way to get table
app.post('/', function (req,res,next) {
  var body = req.body;

  if(body.request == "read"){
    if(body.hasOwnProperty('query')){
      getData(body.query, res);
      console.log("query");
    }
    else if(body.table == "customers"){
      getData(getCustomersQuery,res);
    }
    else if(body.table == "orders"){
      getData(getOrdersQuery,res);
    }
    else if(body.table == "keyboardOrders"){
      getData(getKeyboardOrdersQuery,res);
    }
    else if(body.table == "keyboards"){
      getData(getKeyboardsQuery,res);
    }
    else if(body.table == "switches"){
      getData(getSwitchesQuery,res);
    }
    else if(body.table == "keyColors"){
      getData(getKeyColorsQuery,res);
    }
  }

  // INSERT
  else if(body.request == "insert"){
    if(body.table == "customers"){
      var {firstName, lastName, phoneNumber} = req.body;

      mysql.pool.query(insertCustomersQuery,[firstName, lastName, phoneNumber], (err, result) => {
        if(err){
          next(err);
          return;
        }
      getData(getCustomersQuery,res);
      });
    }
    else if(body.table == "orders"){
      var {customerNum, orderDate, paymentType} = req.body;
  
      mysql.pool.query(insertOrdersQuery,[customerNum, orderDate, paymentType], (err, result) => {
        if(err){
          next(err);
          return;
        }
      getData(getOrdersQuery,res);
      });
    }
    else if(body.table == "keyboardOrders"){
      var {orderNum, keyboardNum, quantityOrdered, pricePerUnit} = req.body;
  
      mysql.pool.query(insertKeyboardOrdersQuery,[orderNum, keyboardNum, quantityOrdered, pricePerUnit], (err, result) => {
        if(err){
          next(err);
          return;
        }
      getData(getKeyboardOrdersQuery,res);
      });
    }
    else if(body.table == "keyboards"){
      var {name, quantityInStock, switchNum, keyColorNum} = req.body;
  
      mysql.pool.query(insertKeyboardsQuery,[name, quantityInStock, switchNum, keyColorNum], (err, result) => {
        if(err){
          next(err);
          return;
        }
      getData(getKeyboardsQuery,res);
      });
    }
    else if(body.table == "switches"){
      var {switchName} = req.body;
  
      mysql.pool.query(insertSwitchesQuery,[switchName], (err, result) => {
        if(err){
          next(err);
          return;
        }
      getData(getSwitchesQuery,res);
      });
    }
    else if(body.table == "keyColors"){
      var {keyColorName} = req.body;
  
      mysql.pool.query(insertKeyColorsQuery,[keyColorName], (err, result) => {
        if(err){
          next(err);
          return;
        }
      getData(getKeyColorsQuery,res);
      });
    }

  }

  // DELETE
  else if(body.request == "delete"){
    var id = req.body;  // TODO: need to change logic so individual PKs are found
    var thisBody = body.table;
    var thisDeleteQuery;
    var thisGetQuery;

    switch(thisBody) {
      case "customers":
        thisDeleteQuery = deleteCustomersQuery;
        thisGetQuery = getCustomersQuery;
        break;
      case "orders":
        thisDeleteQuery = deleteOrdersQuery;
        thisGetQuery = getOrdersQuery;
        break;
      case "keyboardOrders":
        thisDeleteQuery = deleteKeyboardOrdersQuery;
        thisGetQuery = getKeyboardOrdersQuery;
        break;
      case "keyboards":
        thisDeleteQuery = deleteKeyboardsQuery;
        thisGetQuery = getKeyboardsQuery;
        break;
      case "switches":
        thisDeleteQuery = deleteSwitchesQuery;
        thisGetQuery = getSwitchesQuery;
        break;
      case "keyColors":
        thisDeleteQuery = deleteKeyColorsQuery;
        thisGetQuery = getKeyColorsQuery;
        break;      
      default:
        print("No table was found -- check index.js");
        break;
    }
    
    mysql.pool.query(thisDeleteQuery, id, (err, result) => {
      if(err){
        next(err);
        return;
      }
    getData(thisGetQuery,res);
    });
  }

  /* var {customerNum, firstName, lastName, phoneNumber} = req.body;
  
  mysql.pool.query(insertQuery,
     [customerNum, firstName, lastName, phoneNumber], (err, result) => {

    if(err){
      next(err);
      return;
    }
    getAllData(res); 
  }); */
});

// to insert
/* app.post('/', function (req,res,next) {
  var {customerNum, firstName, lastName, phoneNumber} = req.body;
  
  mysql.pool.query(insertQuery,
     [customerNum, firstName, lastName, phoneNumber], (err, result) => {

    if(err){
      next(err);
      return;
    }
    getAllData(res); 
  });
}); */


/* // to delete
app.delete('/', function (req,res,next) {
  mysql.pool.query(deleteQuery, [req.body.id], (err, result) => {
    if(err){
      next(err);
      return;
    }
    getAllData(res);
  });
});


// a simple update
app.put('/', function (req,res,next) {
  var {name, reps, weight, unit, date, id} = req.body;

  mysql.pool.query(updateQuery,
    [name, reps, weight, unit, date, id], (err, result) => {
   if(err){
     next(err);
     return;
   }
   getAllData(res);
 });
}); */


//reset table
app.get('/reset-table',function(req,res,next){
  mysql.pool.query(dropTableQuery, function(err){
    mysql.pool.query(makeTableQuery, function(err){
      res.send("Table reset");
    })
  });
});


app.use(function(req,res){
  res.status(404);
  res.send('404');
});


app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.send('500');
});


app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
