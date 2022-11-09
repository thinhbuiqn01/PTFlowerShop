const { newProduct } = require("../controller/ProductController");

const router = require('express').Router();
router.post('/new', newProduct); 

module.exports = router;