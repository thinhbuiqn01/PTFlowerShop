const { listProducts, newProduct } = require("../controller/ProductController");

const router = require('express').Router();
router.post('/new', newProduct);
router.get('/', listProducts);

module.exports = router;