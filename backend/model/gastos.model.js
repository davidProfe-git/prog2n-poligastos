const db = require("../config/db")

class GastosModel {

    static async consultarGastos () {
        let [resultados] = await db.query('SELECT * FROM movimientos') 
        return resultados
    }

    static async consultarCategorias() {
        let [resultados] = await db.query('SELECT * FROM categorias') 
        return resultados
    }

    static async guardar(datos) {
        const query = `
            INSERT INTO movimientos (tipo, monto, descripcion, id_categorias, id_usuarios) 
            VALUES (?, ?, ?, ?, 1)
        `;
        return await db.query(query, [datos.tipo, datos.monto, datos.descripcion, datos.id_categorias]);
    }

}

module.exports = GastosModel
// const prueba = Gastos
// prueba.consultarGastos()
