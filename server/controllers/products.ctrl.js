var express = require('express');
var procedures = require('../procedures/products.proc');
var router = express.Router();

router.route('/:id')
    .get(function (req, res) {
        procedures.read(req.params.id)
            .then(function (post) {
                res.send(post);
            }).catch(function (err) {
                console.log(err);
                res.sendStatus(500);
            });
    })

router.route('/')
    .get(function (req, res) {
        procedures.all(req.query.productid)
            .then(function (categories) {
                res.send(categories);
            }).catch(function (err) {
                console.log(err);
                res.sendStatus(500);
            });
    });

module.exports = router;