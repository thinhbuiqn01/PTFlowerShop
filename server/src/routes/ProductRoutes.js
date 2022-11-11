const { newProduct, listProduct, deleteProduct } = require("../controller/ProductController");

const router = require('express').Router();
router.post('/new', newProduct); 
router.delete('/:_id/delete', deleteProduct);
router.get('/', listProduct);

module.exports = router;