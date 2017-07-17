var db = require('../config/db.js');

exports.all = function(catId) {
    return db.rows('GetProducts', [catId]);
}