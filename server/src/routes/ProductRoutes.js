const { newProduct, listProduct, deleteProduct, updateProduct, getProduct } = require("../controller/ProductController");

const router = require('express').Router();
router.post('/new', newProduct); 
router.delete('/:_id/delete', deleteProduct);
router.get('/:id', getProduct);
router.put('/:id/update', updateProduct);
router.get('/', listProduct);

module.exports = router;