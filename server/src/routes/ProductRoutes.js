const {
  newProduct,
  listProductOfId,
  listProduct,
  deleteProduct,
  updateProduct,
  getProductID,
} = require("../controller/ProductController");

const router = require("express").Router();
router.post("/new", newProduct);
router.delete("/:_id/delete", deleteProduct);
router.get("/:id", getProductID);
//router.get('/search', getProduct);
router.get("/", listProduct);
router.get("/cate/:categoryID", listProductOfId);
router.put("/:id/update", updateProduct);
//router.get('/', listProduct);

module.exports = router;
