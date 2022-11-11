const { model } = require("mongoose");
const Product = require("../model/ProductModel");

module.exports.newProduct = async (req, res, next) => {
  try {
    const { nameproduct, origin, price, image, categoryID } = req.body;
    const product = await Product.create({
      nameproduct,
      origin,
      price,
      categoryID,
      image,
    });
    return res.json({ status: true, product });
  } catch (err) {
    next(err);
  }
};

module.exports.listProduct = async (req, res, next) => {
  const products = await Product.find({});
  return res.json({ status: true, products });
};

module.exports.deleteProduct = async (req, res, next) => {
  console.log(req.params);
  const data = await Product.deleteOne({ _id: req.params._id });
  return res.json(data);
};
