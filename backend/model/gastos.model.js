const db = require("../config/conexion");

class GastosModel {

    static async consultarGastos() {
        const [resultados] = await db.query("SELECT * FROM movimientos");
        return resultados;
    }

    static async consultarCategorias() {
        const [resultados] = await db.query("SELECT * FROM categoria");
        return resultados;
    }

    static async crearMovimiento(datos) {
        const { descripcion, monto, fecha, tipo, id_categoria } = datos;

        const [resultado] = await db.query(
            `INSERT INTO movimientos
            (descripcion, fecha, monto, tipo, id_cuenta, id_categoria)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [descripcion, fecha, monto, tipo, 1, id_categoria]
        );

        return resultado;
    }

    static async eliminarMovimiento(id) {
        const [resultado] = await db.query(
            "DELETE FROM movimientos WHERE id_movimiento = ?",
            [id]
        );

        return resultado;
    }
    static async editarMovimiento(id, datos) {
    const { monto, id_categoria, descripcion, fecha, tipo } = datos;

    const [resultado] = await db.query(
        `UPDATE movimientos
         SET monto = ?, id_categoria = ?, descripcion = ?, fecha = ?, tipo = ?
         WHERE id_movimiento = ?`,
        [monto, id_categoria, descripcion, fecha, tipo, id]
    );

    return resultado;
}
}

module.exports = GastosModel;