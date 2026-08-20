const db = require("../config/db")

class GastosModel{

    static async consultarGastos(){
        let resultados = await db.query('SELECT * FROM movimiento')
        return resultados
    }

}

module.exports = GastosModel


