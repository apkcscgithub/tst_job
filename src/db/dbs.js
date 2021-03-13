const mysql = require("mysql");
const confg = require("../confg/config");
const db = mysql.createConnection(confg.connec);
module.exports = db;