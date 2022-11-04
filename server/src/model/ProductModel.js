const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

const productSchema = new mongoose.Schema({
  nameproduct: {
    type: String,
    require: true,
  },
  origin: {
    type: String,
    require: true,
    max: 100,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  idCategory: {
    type: Number,
    unique: true,
  },
  vote: {
    type: Number,
    default: 0,
  },
});

mongoose.plugin(slug);
module.exports = mongoose.model("Products", productSchema);
