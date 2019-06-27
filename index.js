var express = require('express');
var app = express();
const path = require('path');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'https://www.db4free.net',
  user     : 'cmolina',
  password : '2019Cmp2',
  database : 'contador'
});


app.get('/registros-camaras', function (req, res) {
    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows[0].solution);
        res.sendFile(path.join(__dirname+'/index.html'));
    });

    connection.end();
});

app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port !');
});