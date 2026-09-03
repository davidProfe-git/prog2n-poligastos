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

    static async crearGasto(req, res) {
        try {
            const { monto, concepto, categoria_id, fecha, tipo } = req.body

            if (!monto || !concepto || !categoria_id || !fecha || !tipo) {
                return res.status(400).json({ error: 'Todos los campos son requeridos' })
            }

            let resultado = await gastos_Model.crearGasto({ monto, concepto, categoria_id, fecha, tipo })
            res.status(201).json({
                message: 'Registro creado exitosamente',
                data: resultado
            })
        } catch (error) {
            console.error('Error al crear gasto:', error)
            res.status(500).json({ error: 'Error al crear el registro' })
        }
    }

}

module.exports = GastosController

