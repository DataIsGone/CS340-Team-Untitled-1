var express = require('express');
var mysql = require('./dbcon.js');
var CORS = require('cors');           

var app = express();
app.set('port', 21895);     
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(CORS()); 


// queries placed here for easier editing, place them where needed
const getCustomersQuery = 'SELECT * FROM customers';
const getOrdersQuery = 'SELECT * FROM orders';
const getKeyboardOrdersQuery = 'SELECT * FROM keyboardOrders';
const getKeyboardsQuery = 'SELECT * FROM keyboards';
const getSwitchesQuery = 'SELECT * FROM switches';
const getKeyColorsQuery = 'SELECT * FROM keyColors';

const insertCustomersQuery = "INSERT INTO customers (`firstName`,`lastName`,`phoneNumber`) VALUES (?,?,?)";
const insertOrdersQuery = "INSERT INTO orders (`customerNum`, `orderDate`, `paymentType`) VALUES (?,?,?)";
const insertKeyboardOrdersQuery = "INSERT INTO keyboardOrders (`orderNum`, `keyboardNum`, `quantityOrdered`, `pricePerUnit`) VALUES (?,?,?,?)";
const insertKeyboardsQuery = "INSERT INTO keyboards (`name`, `quantityInStock`, `switchNum`, `keyColorNum`) VALUES (?,?,?,?)";
const insertSwitchesQuery = "INSERT INTO switches (`switchName`) VALUES (?)";
const insertKeyColorsQuery = "INSERT INTO keyColors (`keyColorName`) VALUES (?)";

const updateCustomersQuery = "UPDATE customers SET firstName=?,lastName=?,phoneNumber=? WHERE customerNum=?";
const updateOrdersQuery = "UPDATE orders SET customerNum=?,orderDate=?,paymentType=? WHERE orderNum=?";
const updateKeyboardsQuery = "UPDATE keyboards SET name=?,quantityInStock=?,switchNum=?,keyColorNum=? WHERE keyboardNum=?";
const updateKeyboardOrdersQuery = "UPDATE keyboardOrders SET quantityOrdered=?,pricePerUnit=? WHERE orderNum=? AND keyboardNum=?";
const updateSwitchesQuery = "UPDATE switches SET switchName=? WHERE switchNum=?";
const updateKeyColorsQuery = "UPDATE keyColors SET keyColorName=? WHERE keyColorNum=?";

                    

const getData = (query, res) => { 
  mysql.pool.query(query, (err, rows, fields) => {
    if (err){
      next(err);
      return;
    }
    res.json({"rows":rows});
  })
}

// new way to get table
app.post('/', function (req,res,next) {
  var body = req.body;

  if(body.request == "read"){
    if(body.hasOwnProperty('query')){
      getData(body.query, res);
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
});


// a simple update
app.put('/', function (req,res,next){
  if(req.body.table == "customers"){
    var {customerNum, firstName, lastName, phoneNumber} = req.body;
    mysql.pool.query(updateCustomersQuery,
      [firstName, lastName, phoneNumber, customerNum], (err, result) => {
      if(err){
        next(err);
        return;
      }
      getData(getCustomersQuery,res);
    });
  }
  else if(req.body.table == "orders"){
    var {orderNum, customerNum, orderDate, paymentType} = req.body;
    mysql.pool.query(updateOrdersQuery,
      [customerNum, orderDate, paymentType, orderNum], (err, result) => {
      if(err){
        next(err);
        return;
      }
      getData(getOrdersQuery,res);
    });
  }
  else if(req.body.table == "keyboards"){
    var {keyboardNum, name, quantityInStock, switchNum, keyColorNum} = req.body;
    mysql.pool.query(updateKeyboardsQuery,
      [name, quantityInStock, switchNum, keyColorNum, keyboardNum], (err, result) => {
      if(err){
        next(err);
        return;
      }
      getData(getKeyboardsQuery,res);
    });
  }
  else if(req.body.table == "keyboardOrders"){
    var {orderNum, keyboardNum, quantityOrdered, pricePerUnit} = req.body;
    mysql.pool.query(updateKeyboardOrdersQuery,
      [quantityOrdered, pricePerUnit, orderNum, keyboardNum], (err, result) => {
      if(err){
        next(err);
        return;
      }
      getData(getKeyboardOrdersQuery,res);
    });
  }
  else if(req.body.table == "switches"){
    var {switchNum, switchName} = req.body;
    mysql.pool.query(updateSwitchesQuery,
      [switchName, switchNum], (err, result) => {
      if(err){
        next(err);
        return;
      }
      getData(getSwitchesQuery,res);
    });
  }
  else if(req.body.table == "keyColors"){
    var {keyColorNum, keyColorName} = req.body;
    mysql.pool.query(updateKeyColorsQuery,
      [keyColorName, keyColorNum], (err, result) => {
      if(err){
        next(err);
        return;
      }
      getData(getKeyColorsQuery,res);
    });
  } 
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
