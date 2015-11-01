const PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();

app.use(express.static('./public'));

var movies = [{
  title : 'Star Wars IV',
  year : 1977
},
{
  title : 'Star Wars V',
  year : 1980
},
{
  title : 'Star Wars VI',
  year : 1983
},
{
  title : 'Star Wars VII',
  year : 2015
}];

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.listen(PORT, () => {
  console.log('app started listening on:'+PORT);
});
