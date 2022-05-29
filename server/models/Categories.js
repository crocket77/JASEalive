const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  category: {
    type: String
  }
});

const Categories = model('Categories', categorySchema);

module.exports = Categories;