var express = require('express');
var products = require('./controllers/products.ctrl');
var purchases = require('./controllers/purchases.ctrl');
var purchasesProducts = require('./controllers/purchasesproducts.ctrl');
var mail = require('./controllers/mail.ctrl');


var router = express.Router();
router.use('/products', products);
<<<<<<< HEAD
router.use('/mail', mail);
// router.use('/purchases', purchases);
=======
router.use('/purchases', purchases);
>>>>>>> c891507b367345f999b9747901ac51f01f81db93
// router.use('/purchasesproducts', purchasesProducts);

module.exports = router;