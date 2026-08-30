const db = require("../config/db")

class GastosModel {

    static async consultarGastos() {
        let [resultados] = await db.query('SELECT * FROM gastos')
        //lo que retorna la consulta de sql es [datos] [metadatos] 
        return resultados
    }

}

module.exports = GastosModel


