const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Permite procesar datos en formato JSON y sirve tu frontend
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Configuración de tu base de datos local
const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '', 
    database: 'poligastos_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos poligastos_db');
});

// Endpoint principal para consultar las transacciones
app.get('/api/historial', (req, res) => {
    const query = `
        SELECT t.fecha_hora, t.tipo, c.nombre_categoria, t.monto 
        FROM transacciones t
        JOIN categorias c ON t.id_categoria = c.id_categoria
        ORDER BY t.fecha_hora DESC
    `;
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ transacciones: results });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor de PoliGastos corriendo en http://localhost:${PORT}`);
});