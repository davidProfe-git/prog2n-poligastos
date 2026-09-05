const gastos_Model = require("../model/gastos.model")

const consultarGastos = async (request, response) => {
    let movimientos = await gastos_Model.consultarGastos()
    response.json({
        data: movimientos 
    })
}

const consultarCategorias = async (request, response) => {
    let categorias = await gastos_Model.consultarCategorias()
    response.json({
        data: categorias
    })
}

const registrarMovimiento = async (request, response) => {
    try {
        const { monto, id_categorias, tipo, descripcion } = request.body;

        await gastos_Model.guardar({
            monto,
            id_categorias,
            tipo,
            descripcion: descripcion || 'Registro general'
        });

        response.status(201).json({ mensaje: "Movimiento guardado con exito mi rey" });
    } catch (error) {
        console.error("Error exacto en la BD:", error);
        response.status(500).json({ error: "Error al guardar el movimiento rey" });
    }
};

const eliminarMovimiento = async (request, response) => {
    try {
        const { id } = request.params;
        await gastos_Model.eliminar(id);
        response.json({ mensaje: "Movimiento eliminado mi rey" });
    } catch (error) {
        console.error("Error al eliminar:", error);
        response.status(500).json({ error: "Error al eliminar mae" });
    }
};

module.exports = {
    consultarGastos,
    consultarCategorias,
    registrarMovimiento,
    eliminarMovimiento
};

