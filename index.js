var express = require('express');
var app = express();
const path = require('path');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '85.10.205.173',
  user     : 'cmolina',
  password : '2019Cmp2',
  database : 'contador'
});


app.get('/registros-camaras', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM cont', function(err, rows, fields) {
        if (err) throw err;
        console.log('database contador  is: ', rows[0]);
        res.sendFile(path.join(__dirname+'/index.html'));
    });

    connection.end();
});

app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port !');
});