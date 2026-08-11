const path = require('path');
const express = require('express');
const gastos = require('./controller/gastos.controller');
 
const app = express();
const PUERTO = process.env.PORT || 3000;
 
app.use(express.json());
 
// Sirve el frontend (index.html y css/style.css)
app.use(express.static(path.join(__dirname, '..', 'frontend')));
 
// --- API ---
app.get('/api/categorias', gastos.categorias);
app.get('/api/medios-pago', gastos.mediosPago);
app.get('/api/gastos', gastos.listar);
app.post('/api/gastos', gastos.crear);
app.delete('/api/gastos/:id', gastos.eliminar);
app.get('/api/resumen/:periodo', gastos.resumen);
 
// --- Manejo de errores ---
app.use((req, res) => res.status(404).json({ error: 'Ruta no encontrada' }));
 
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'Error interno del servidor' });
});
 
app.listen(PUERTO, () => {
  console.log(`Servidor de Gastos en http://localhost:${PUERTO}`);
});
 
