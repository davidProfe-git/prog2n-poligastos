const GastosModel = require("../model/gastos.model");

class GastosController {
    static async consultarGastos(req, res) {
        try {
            let movimientos = await GastosModel.consultarGastos();
            res.json({ data: movimientos }); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = GastosController;
