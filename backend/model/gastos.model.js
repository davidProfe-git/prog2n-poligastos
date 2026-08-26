const db = require("../config/db")

class Gastos{

    static async consultarGastos (){
        let [resultados] = await db.query('SELECT * FROM movimientos') 
       // console.log (resultados)
        return resultados
    }

}
module.exports=Gastos


// const prueba = Gastos
// prueba.consultarGastos()
