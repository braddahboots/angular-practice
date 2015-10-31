const PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();

app.use(express.static('./public'));

app.listen(PORT, function() {
  console.log('app started listening on:'+PORT);
});