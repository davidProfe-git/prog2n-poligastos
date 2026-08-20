const gastosModel = require("../model/gastos.model")

class GastosController{

    static async ConsultarGastos(request, response){

        let movimientos = await gastosModel.consultarGastos()
        response.json({
        data:movimientos
        })
        

    }
}



module.exports = GastosController