const express = require('express');
const productController = require('../controllers/productController');
const { createProductValidation, updateProductValidation,createMultiProductValidation } = require('../utils/validate/productValidation');
const validateMiddleware = require('../utils/validate/validateMiddleware');
const router = express.Router();

router.post('/product', createProductValidation, validateMiddleware, productController.createProduct);
router.post('/products', createMultiProductValidation, validateMiddleware, productController.createManyProduct);
router.get('/products/:id', productController.getProduct);
router.get('/products', productController.getAllProducts);
router.put('/products', updateProductValidation, validateMiddleware, productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
