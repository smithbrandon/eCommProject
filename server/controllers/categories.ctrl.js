var express = require('express');
var procedures = require('../procedures/categories.proc');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        console.log(req.query);
        console.log(req.params);
        console.log(req.body);
        procedures.all(req.query.categoryid)
        .then(function(categories) {
            res.send(categories);
        }).catch(function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    });

module.exports = router;