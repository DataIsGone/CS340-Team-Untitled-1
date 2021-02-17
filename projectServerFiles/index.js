var express = require('express');
var mysql = require('./dbcon.js');
var CORS = require('cors');           

var app = express();
app.set('port', 21895);     
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(CORS()); 


// queries placed here for easier editing, place them where needed
const getAllQuery = 'SELECT * FROM customers';
const insertQuery = "INSERT INTO customers (`firstName`,`lastName`,`phoneNumber`) VALUES (?,?,?)";
//const updateQuery = "UPDATE workout SET name=?,reps=?,weight=?,unit=?,date=? WHERE id=? ";
//const deleteQuery = "DELETE FROM workout WHERE id=?";
const dropTableQuery = "DROP TABLE IF EXISTS customers";
const makeTableQuery = `CREATE TABLE customers(
	                      customerNum INT(11) NOT NULL AUTO_INCREMENT,  
	                      lastName  VARCHAR(255) NOT NULL, 
	                      firstName VARCHAR(255) NOT NULL, 
	                      phoneNumber VARCHAR(255) DEFAULT NULL,
	                      PRIMARY KEY (customerNum)
                        )`;
                       


const getAllData = (res) => { 
  mysql.pool.query(getAllQuery, (err, rows, fields) => {
    if (err){
      next(err);
      return;
    }
    res.json({"rows":rows});
  })
}

// get table data and send to client
app.get('/', function (req,res,next) {
  getAllData(res);
});


// to insert
app.post('/', function (req,res,next) {
  var {customerNum, firstName, lastName, phoneNumber} = req.body;
  
  mysql.pool.query(insertQuery,
     [customerNum, firstName, lastName, phoneNumber], (err, result) => {

    if(err){
      next(err);
      return;
    }
    getAllData(res); 
  });
});


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
