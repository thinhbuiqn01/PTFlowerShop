const mongoose = require("mongoose");

const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);
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
    type: Object,
  },
  categoryID: {
    type: Number,
    default: 0,
  },
  vote: {
    type: Number,
    default: 0,
  },
  slug: {
    type: String,
    slug: "nameproduct",
    unique: true,
  },
});
module.exports = mongoose.model("Products", productSchema);
