const { model } = require("mongoose");
const Product = require("../model/ProductModel");

module.exports.listProducts = async (req, res, next) => {
  try {
    Product.find({}).then((products) => {
      res.json(products);
    });
  } catch (err) {
    next(err);
  }
};

module.exports.newProduct =  (req, res, next) => {
  console.log(req.body);
}
