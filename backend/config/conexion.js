const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "12345",
    database: "FINANZAS",
    port: 3306
});

module.exports = db;