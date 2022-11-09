const mongoose = require("mongoose"); 

const categorySchema = new mongoose.Schema({
  namecategory: {
    type: String,
    require: true,
  },
  categoryID: {
    type: Number,  
  }, 
});
 
module.exports = mongoose.model("Categories", categorySchema);
