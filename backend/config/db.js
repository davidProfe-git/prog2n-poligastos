const mysql = require("mysql2")

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:'',
    port:3306,
    database:"control_gastos",
})

module.exports = pool.promise()