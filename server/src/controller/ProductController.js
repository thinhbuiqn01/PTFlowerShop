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
