const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: String,
  description: String,
  price: String,
  category: String
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
