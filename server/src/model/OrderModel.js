const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  listProduct: {
    type: Array,
    require: true,
  },
  sentName: {
    type: String,
  },
  sentPhone: {
    type: String,
    unique: true,
  },
  sentAddress: {
    type: String,
  },
  sentEmail: {
    type: String,
    unique: true,
  },
  takeName: {
    type: String,
    require: true,
    unique: true,
  },
  takeAddress: {
    type: String,
    require: true,
    unique: true,
  },
  takeState: {
    type: String,
    require: true,
    unique: true,
  },
  takePhone: {
    type: String,
    unique: true,
    require: true,
  },
  takeTime: {
    type: String,
    default: "",
  },
  giveMessage: {
    type: String,
    default: "",
  },
  occasion: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Orders", orderSchema);
