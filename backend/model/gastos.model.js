const db = require ("../config/db")

class GastosModel{

    static async consultarGastos(){
        let [resultados] = await db.query("SELECT * FROM gastos")
        //console.log(resultados)
        return resultados
    }
}    

// const prueba = GastosModel
// prueba.consultarGastos()

module.exports = GastosModel