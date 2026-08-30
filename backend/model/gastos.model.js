const db = require("../config/db")

class GastosModel{

    static async consultarGastos (){
        let [resultados] = await db.query('SELECT * FROM movimientos') 
       // console.log (resultados)
        return resultados
    }

}
module.exports=GastosModel

    
// const prueba = Gastos
// prueba.consultarGastos()
