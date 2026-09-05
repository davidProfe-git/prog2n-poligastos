const GastosModel = require("../model/gastos.model");

class GastosController {
    static async consultarGastos(req, res) {
        try {
            let movimientos = await GastosModel.consultarGastos();
            // Retornamos { data: movimientos } para que el frontend reciba responseData.data
            res.json({ data: movimientos });
        } catch (error) {
            console.error("Error en consultarGastos:", error);
            res.status(500).json({ error: error.message });
        }
    }

    static async crearGasto(req, res) {
        try {
            let nuevoGasto = await GastosModel.crearGasto(req.body);
            res.status(201).json({ message: "Registro guardado exitosamente", id: nuevoGasto.insertId });
        } catch (error) {
            console.error("Error en crearGasto:", error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = GastosController;