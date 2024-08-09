const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String,  minlength: 3 },
  description: { type: String,  minlength: 10 },
  price: { type:Number, min: 0 },
  category: { type: String},
  imageUrl: { type: String } // URL or path to the image
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;