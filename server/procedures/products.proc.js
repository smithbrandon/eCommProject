var db = require('../config/db');

exports.read = function(id) {
    return db.row('GetProduct', [id]);
}