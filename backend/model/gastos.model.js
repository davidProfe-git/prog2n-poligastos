const db = require("../config/db"); 

class GastosModel {
    static async consultarGastos() {
        const [rows] = await db.query("SELECT * FROM gasto ORDER BY id_gasto DESC");
        return rows;
    }

    static async crearGasto(datos) {
        const { nombre, valor, fecha, id_categoria, tipo } = datos;
        const sql = "INSERT INTO gasto (nombre, valor, fecha, id_categoria, tipo) VALUES (?, ?, ?, ?, ?)";
        const [resultado] = await db.query(sql, [nombre, valor, fecha, id_categoria, tipo]);
        return resultado;
    }
}

module.exports = GastosModel;