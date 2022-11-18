const { model } = require("mongoose");
const Product = require("../model/ProductModel");

module.exports.newProduct = async (req, res, next) => {
  try {
    const { nameproduct, origin, price, image, categoryID } = req.body;
    console.log(req.body);
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
  const data = await Product.deleteOne({ _id: req.params._id });
  return res.json(data);
};

module.exports.getProductID = async (req, res, next) => {
  const data = await Product.findById({ _id: req.params.id });
  return res.json(data);
};

/* module.exports.getProduct = async (req, res, next) => {
  const data = await Product.find({});
  console.log(data);
};
 */
module.exports.updateProduct = async (req, res, next) => {
  try {
    const { nameproduct, origin, price, image, categoryID } = req.body;
    
    const data = await Product.updateOne({
      nameproduct,
      origin,
      price,
      categoryID,
      image,
    });
    return res.json({ status: true, data });
  } catch (err) {
    next(err);
  }
};
