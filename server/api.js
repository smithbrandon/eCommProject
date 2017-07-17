var express = require('express');
var products = require('./controllers/products.ctrl');
var purchases = require('./controllers/purchases.ctrl');
var purchasesProducts = require('./controllers/purchasesproducts.ctrl');

var router = express.Router();
router.use('/products', products);
// router.use('/purchases', purchases);
// router.use('/purchasesproducts', purchasesProducts);

module.exports = router;