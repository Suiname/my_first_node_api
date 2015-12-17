var http = require('http');
var json = require('json');
require('./db/database');
var SpiritAnimal = require('./models/SpiritAnimal');
var express = require('express');
var app = express();



app.get('/', function(request, response){
  SpiritAnimal.find(function(error, animals) {
  response.send(animals);
  console.log("get /");
  });
});

console.log("Api Server up in hurr");
// console.log(SpiritAnimal.find(function(error,animals){
//   return animals;
// }));

app.listen(8080);
console.log("my app is running on port 8080");
