var express = require('express');
var app = express();

app.get('/registros-camaras', function (req, res) {
  res.sendFile('index.html');
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port !');
});