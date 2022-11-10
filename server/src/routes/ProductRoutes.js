const { newProduct, listProduct } = require("../controller/ProductController");

const router = require('express').Router();
router.post('/new', newProduct); 
router.get('/', listProduct);

module.exports = router;