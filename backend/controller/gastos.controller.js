const gastos_Model = require("../model/gastos.model")

class GastosController{

    static async consultarGastos(req,res){

        let movimientos = await gastos_Model.consultarGastos()
       res.json({
        data:movimientos
       }) 

    }

}

module.exports = GastosController

