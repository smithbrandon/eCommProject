var express = require('express');
var stripeSvc = require('../services/stripe.svc.js');
var router = express.Router();

router.post('/', function(req, res){
    console.log(req.body);
    var amount = req.body.amount;
    stripeSvc.charge(req.body.token, amount).then(function(success){
        console.log(success);
        res.sendStatus(204);
    },function(err){
        console.log(err);
        res.sendStatus(500);
    })
})


module.exports = router;