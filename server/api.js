var express = require('express');
var products = require('./controllers/products.ctrl');
var purchases = require('./controllers/purchases.ctrl');
var purchasesProducts = require('./controllers/purchasesproducts.ctrl');
var mail = require('./controllers/mail.ctrl');


var router = express.Router();
router.use('/products', products);
router.use('/mail', mail);
router.use('/purchases', purchases);
// router.use('/purchasesproducts', purchasesProducts);

module.exports = router;