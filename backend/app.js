const express = require('express');
const path = require('path');
const cors = require('cors');
const router = require('./routes/router');

const app = express();

app.use(cors());
app.use(express.json());

// Servir estáticos desde la carpeta frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Entregar index.html en la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Rutas API
app.use('/api', router);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
