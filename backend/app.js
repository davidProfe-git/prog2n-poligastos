const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '12345',
    database: 'FINANZAS',
    port: 3306
});

db.connect(error => {
    if (error) {
        console.log('Error al conectar con MySQL:', error.message);
    } else {
        console.log('MySQL conectado correctamente');
    }
});

app.get('/', (req, res) => {
    res.json({
        mensaje: 'API de Poligastos funcionando'
    });
});

app.get('/api/categorias', (req, res) => {
    const sql = 'SELECT id_categoria, descripcion FROM categoria';

    db.query(sql, (error, resultados) => {
        if (error) {
            return res.status(500).json({
                error: 'Error al consultar categorías'
            });
        }

        res.json({
            data: resultados
        });
    });
});

app.get('/api/movimientos', (req, res) => {
    const sql = 'SELECT * FROM movimientos';

    db.query(sql, (error, resultados) => {
        if (error) {
            return res.status(500).json({
                error: 'Error al consultar movimientos'
            });
        }

        res.json({
            data: resultados
        });
    });
});

app.post('/api/movimientos', (req, res) => {
    const { descripcion, monto, fecha, id_categoria, tipo } = req.body;

    if (!descripcion || !monto || !fecha || !id_categoria || !tipo) {
        return res.status(400).json({
            error: 'Todos los campos son obligatorios'
        });
    }

    if (tipo !== 'ingreso' && tipo !== 'gasto') {
        return res.status(400).json({
            error: 'Tipo de movimiento no válido'
        });
    }

    const sql = `
        INSERT INTO movimientos
        (descripcion, fecha, monto, tipo, id_cuenta, id_categoria)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [descripcion, fecha, monto, tipo, 1, id_categoria],
        (error, resultado) => {
            if (error) {
                return res.status(500).json({
                    error: 'Error al guardar el movimiento'
                });
            }

            res.status(201).json({
                mensaje: 'Movimiento guardado correctamente',
                id: resultado.insertId
            });
        }
    );
});

app.listen(4000, () => {
    console.log('Servidor funcionando en http://localhost:4000');
});