var express = require('express');
var app = express();

app.get('/registros-camaras', function (req, res) {

  res.send('Contador de personas!');
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port !');
});