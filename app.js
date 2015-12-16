var http = require('http');
var json = require('json');
require('./db/database');
var SpiritAnimal = require('./models/SpiritAnimal');

http.createServer(function(req, res){
  SpiritAnimal.find(function(error, animals) {
    if (error) console.log(error);
    res.writeHead(200);
    res.write(JSON.stringify(animals));
    res.end();
  });
}).listen(8080);

console.log("Api Server up in hurr");
console.log(SpiritAnimal.find(function(error,animals){
  return animals;
}));
