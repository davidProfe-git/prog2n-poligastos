const db = require ("../config/db")

class GastosModel{

    static async consultarGastos(){
        let [resultados] = await db.query("SELECT * FROM gastos")
        return resultados
    }
}    


module.exports = GastosModel