const GastosModel = require("../model/gastos.model");

class GastosController {

    static async consultarGastos(req, res) {
        try {
            const resultados = await GastosModel.consultarGastos();
            res.json({ data: resultados });
        } catch (error) {
            res.status(500).json({ error: "Error al consultar movimientos" });
        }
    }

    static async consultarCategorias(req, res) {
        try {
            const resultados = await GastosModel.consultarCategorias();
            res.json({ data: resultados });
        } catch (error) {
            res.status(500).json({ error: "Error al consultar categorías" });
        }
    }

    static async crearMovimiento(req, res) {
        try {
            const resultado = await GastosModel.crearMovimiento(req.body);
            res.status(201).json({
                mensaje: "Movimiento guardado correctamente",
                id: resultado.insertId
            });
        } catch (error) {
            res.status(500).json({ error: "Error al guardar el movimiento" });
        }
    }

    static async eliminarMovimiento(req, res) {
        try {
            await GastosModel.eliminarMovimiento(req.params.id);
            res.json({ mensaje: "Movimiento eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar el movimiento" });
        }
    }
   static async editarMovimiento(req, res) {
    try {
        const resultado =await GastosModel.editarMovimiento(
            req.params.id,
            req.body
        );

        res.json({
            mensaje: "Movimiento actualizado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            error: "Error al editar el movimiento"
        });
    }
}
}

module.exports = GastosController;