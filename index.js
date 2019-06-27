var express = require('express');
var app = express();
const path = require('path');
app.get('/registros-camaras', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port !');
});