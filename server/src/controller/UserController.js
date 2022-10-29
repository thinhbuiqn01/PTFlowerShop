const User = require("../model/UserModel");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  try {
    /* Gán giá trị người dùng nhập */
    const { username, password, phone } = req.body;

    /* Kiểm tra username, phone đã có trong hệ thống chưa */
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck) {
      return res.json({ msg: "Username already used", status: false });
    }
    const phoneCheck = await User.findOne({ phone });
    if (phoneCheck) {
      return res.json({ msg: "Phone number already used", status: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      phone,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (err) {
    next(err);
  }
};
