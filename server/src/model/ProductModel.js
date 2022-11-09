const mongoose = require("mongoose");

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
  categoryID: {
    type: Number,
    default: 0,
  },
  vote: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("Products", productSchema);
