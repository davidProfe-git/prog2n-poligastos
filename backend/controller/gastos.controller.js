const gastos_Model = require("../model/gastos.model")

class GastosController{

    static async consultarGastos(req,res){

        let movimientos = await gastos_Model.consultarGastos()
       res.json({
        data: movimientos
       }) 

    }

    static async consultarCaregorias(req,res){

        let categorias = await gastos_Model.consultarCategorias()
       res.json({
        data: categorias
       }) 

    }

}

module.exports = GastosController

