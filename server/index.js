var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var routing = require('./middleware/routing.mw');
var api = require('./api');
var cookieParser = require('cookie-parser');




var clientPath = path.join(__dirname,'../client');

var app = express();

app.use(express.static(clientPath));
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/api', api);

app.get('*', routing.stateRouting);

app.listen(3000);