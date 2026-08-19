const base_de_datos = require ("mysql2")

const pool = base_de_datos.createPool({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'poligastos',
    port:'3306'
}) 

module.exports = pool.promise()
