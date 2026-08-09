// Archivo principal del backend.
// Proyecto académico de nivel inicial.

const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ mensaje: 'API de Tienda de Videojuegos funcionando correctamente' });
});

app.get('/api/productos', (req, res) => {
    res.json([
        { id: 1, nombre: 'FIFA 25', precio: 180000 },
        { id: 2, nombre: 'Mario Kart 8', precio: 160000 },
        { id: 3, nombre: 'Minecraft', precio: 120000 }
    ]);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
