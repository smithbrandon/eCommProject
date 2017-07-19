var express = require('express');
var products = require('./controllers/products.ctrl');
var purchases = require('./controllers/purchases.ctrl');
var purchasesProducts = require('./controllers/purchasesproducts.ctrl');
var mail = require('./controllers/mail.ctrl');


var router = express.Router();
router.use('/products', products);
<<<<<<< HEAD

router.use('/mail', mail);


router.use('/purchases', purchases);

=======
router.use('/mail', mail);
router.use('/purchases', purchases);
>>>>>>> 38e917c4a27a0461c342203d26bbf5bfd6c95a2e
// router.use('/purchasesproducts', purchasesProducts);

module.exports = router;