const db = require ("../config/db")

class GastosModel{

    static async consultarGastos(){
        let [resultados] = await db.query("SELECT * FROM gastos ORDER BY id_gasto DESC LIMIT 5")
        return resultados
        

    }
    

    static async consultarCategoria(){
        let [resultados] = await db.query("SELECT * FROM categorias")
        return resultados
    }



static async crearGasto(monto, descripcion, fecha_gasto, id_usuario, id_categoria, tipo) {
        let [resultado] = await db.query(
            "INSERT INTO gastos (monto, descripcion, fecha_gasto, id_usuario, id_categoria, tipo) VALUES (?, ?, ?, ?, ?, ?)",
            [monto, descripcion, fecha_gasto, id_usuario, id_categoria, tipo]
        )
        return resultado
    }

}


module.exports = GastosModel