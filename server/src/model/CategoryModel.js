const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const categorySchema = new mongoose.Schema({
  _id: Number,
  namecategory: {
    type: String,
    require: true,
  },
},{ _id: false }); 
categorySchema.plugin(AutoIncrement);

module.exports = mongoose.model("Categories", categorySchema);
