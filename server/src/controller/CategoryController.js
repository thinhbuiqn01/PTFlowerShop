const { model } = require("mongoose");
const Category = require("../model/CategoryModel");

module.exports.listCategory = async (req, res, next) => {
  try {
    const category = await Category.find({ id: req.params.id });
    return res.json({ status: true, category });
  } catch (err) {
    next(err);
  }
};

module.exports.newCategory = async (req, res, next) => {
  try {
    const { namecategory } = req.body;
    const nameCategoryCheck = Category.find({ namecategory });

    const category = await Category.create({
      namecategory,
    });
    
    return res.json({ status: true, category });
  } catch (err) {
    next(err);
  }
};
