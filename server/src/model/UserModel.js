const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    min: 8,
    max: 30,
    unique: true,
  },
  phone: {
    type: String,
    length: 10,
    unique: true,
  },
  password: {
    type: String,
    min: 6,
    max: 20,
    require: true,
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  avatarImage: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Users", userSchema);
