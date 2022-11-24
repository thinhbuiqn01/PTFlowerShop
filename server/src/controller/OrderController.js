const Order = require("../model/OrderModel");
module.exports.newOrder = async (req, res, next) => {
  try {
    console.log(req.body);
  } catch (err) {
    next(err);
  }
};
