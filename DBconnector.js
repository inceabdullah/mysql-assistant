const mysql      = require('mysql');
const Creadential = require('./DBcredential.json');
module.exports = mysql.createConnection(Creadential);