var mysql = require('mysql');

var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : '192.168.2.8',
  user     : 'trainee',
  password : 'trainee@123',
  database : 'traineedb'
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM vishaloffice", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });