var db = require('../config/db');

exports.all = function(catId) {
    return db.rows('GetProducts', [catId]);
}

exports.read = function(id) {
    return db.row('GetProduct', [id]);
}