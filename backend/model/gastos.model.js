const db = require("../config/db")

class GastosModel {

    static async consultarGastos() {
        let [resultados] = await db.query('SELECT * FROM gastos')
        //lo que retorna la consulta de sql es [datos] [metadatos] 
        return resultados
    }

    static async consultarCategorias(){
        let [resultados] = await db.query('SELECT * FROM categorias')
        //lo que retorna la consulta de sql es [datos] [metadatos] 
        return resultados
    }

    static async crearGasto(datos) {
        const { monto, concepto, categoria_id, fecha, tipo } = datos
        let [resultado] = await db.query(
            'INSERT INTO gastos (usuario_id, categoria_id, medio_pago_id, concepto, monto, tipo, fecha) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [1, categoria_id, 1, concepto, monto, tipo, fecha]
        )
        return resultado
    }

}

module.exports = GastosModel


