const gastosModel = require("../model/gastos.model")
class GastosController{

    static async ConsultarGastos(request, response){

        let movimientos = await gastosModel.consultarGastos()
        response.json({
        data:movimientos
        })
        

    }


        static async ConsultarCategoria(request, response){

        let categoria = await gastosModel.consultarCategoria()
        response.json({
        data:categoria
        })
        

    }


    
    static async CrearGasto(request, response) {
        try {
            const { monto, descripcion, fecha_gasto, id_categoria, tipo } = request.body
            const id_usuario = 1 // Usuario por defecto (Miguel Ángel)

            await gastosModel.crearGasto(monto, descripcion, fecha_gasto, id_usuario, id_categoria, tipo)

            response.json({
                mensaje: "Registro guardado exitosamente"
            })
        } catch (error) {
            console.error(error)
            response.status(500).json({ error: "Error al guardar el registro" })
        }
    }
}

module.exports = GastosController