const gastos_Model = require("../model/gastos.model")

class GastosController{
    static async consultarGastos(request,response){
        let movimientos = await gastos_Model.consultarGastos()
        response.json({
            data:movimientos 
        })
        
    }

}

module.exports=GastosController