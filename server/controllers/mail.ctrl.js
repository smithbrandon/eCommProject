var express = require('express');
var emailSvc = require('../services/email.svc');

var router = express.Router();

router.post('/', function(req, res) {
    emailSvc.sendEmail(req.body.from, req.body.subject, req.body.content)
    .then(function(response) {
        console.log(response);
        res.sendStatus(201);
    }).catch(function(err) {
        console.log(err);
        console.log(err.response.body.errors);
        res.sendStatus(500);
    });
})

module.exports = router;