const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Configuración de la base de datos
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

// ==========================
// ENDPOINTS DE LA API
// ==========================

// 1. Endpoint de Login
app.post('/api/login', (req, res) => {
    const { correo, password } = req.body;
    const query = 'SELECT id_usuario, nombre, correo FROM usuarios WHERE correo = ? AND password = ?';
    
    db.query(query, [correo, password], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        
        if (results.length > 0) {
            res.json({ exito: true, usuario: results[0] });
        } else {
            res.status(401).json({ exito: false, mensaje: 'Correo o contraseña incorrectos' });
        }
    });
});

// 2. Endpoint de Historial filtrado por usuario
app.get('/api/historial/:id_usuario', (req, res) => {
    const { id_usuario } = req.params;
    const query = `
        SELECT t.fecha_hora, t.tipo, c.nombre_categoria, t.monto, t.descripcion 
        FROM transacciones t
        JOIN categorias c ON t.id_categoria = c.id_categoria
        WHERE t.id_usuario = ?
        ORDER BY t.fecha_hora DESC
    `;
    db.query(query, [id_usuario], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ transacciones: results });
    });
});

// 3. Endpoint para registrar transacciones reales
app.post('/api/transacciones', (req, res) => {
    const { id_usuario, id_categoria, tipo, monto, descripcion } = req.body;
    
    const query = `
        INSERT INTO transacciones (id_usuario, id_categoria, tipo, monto, descripcion) 
        VALUES (?, ?, ?, ?, ?)
    `;
    
    db.query(query, [id_usuario || 1, id_categoria || 6, tipo, monto, descripcion], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: 'Transacción guardada exitosamente en la base de datos' });
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor de PoliGastos corriendo en http://localhost:${PORT}`);
});