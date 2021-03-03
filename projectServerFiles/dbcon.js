var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_davisrya',
  password        : '',
  database        : 'cs340_davisrya'
});

module.exports.pool = pool;
