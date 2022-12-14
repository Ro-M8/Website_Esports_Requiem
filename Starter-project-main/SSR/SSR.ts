//expressjs
const express = require('express');
const app = express();

//path
const path = require('path');

//port
const port = 3000 || process.env.PORT;


//Confuguring the server

app.get('/', function(req, res) {
  res.sendFile(path.resolve('/MainPage/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
