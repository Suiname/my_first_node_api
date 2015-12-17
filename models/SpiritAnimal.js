var mongoose = require('mongoose');

var SpiritAnimalSchema = new mongoose.Schema({
  Name: String,
  SpiritAnimal: String,
  DoTheyLikeIt: Boolean
});

module.exports = mongoose.model('SpiritAnimals', SpiritAnimalSchema, 'SpiritAnimals');
