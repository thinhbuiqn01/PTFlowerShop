const { listCategory,newCategory } = require("../controller/CategoryController");
const router = require("express").Router();

router.post("/new", newCategory);
router.get("/", listCategory);

module.exports = router;
