var express = require('express');
var app = express();

app.get('/registros-camaras', function (req, res) {

  res.send('Contador de personas!');
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});