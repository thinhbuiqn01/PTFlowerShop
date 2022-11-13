const { newProduct, listProduct, deleteProduct, updateProduct, getProductID, getProduct } = require("../controller/ProductController");

const router = require('express').Router();
router.post('/new', newProduct); 
router.delete('/:_id/delete', deleteProduct);
router.get('/:id', getProductID);
router.get('/:query', getProduct);
router.put('/:id/update', updateProduct);
router.get('/', listProduct);

module.exports = router;