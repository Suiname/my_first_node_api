// mongoose is my ORM
var mongoose = require('mongoose');

// specify protocol://server/dbname
var connectionString = "mongodb://localhost/spiritanimals";

// physically connect to mongodb
mongoose.connect(connectionString);

// events to listen to!
mongoose.connection.on('connected', function() {
  console.log('we are connected');
});

mongoose.connection.on('error', function(error) {
  console.log('this is an error');
});

mongoose.connection.on('disconnected', function() {
  console.log('balls');
});
