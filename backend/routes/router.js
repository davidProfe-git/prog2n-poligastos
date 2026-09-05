const express = require('express');
const router = express.Router();
const GastosController = require('../controller/gastos.controller');

router.get('/gastos', GastosController.consultarGastos);
router.post('/gastos', GastosController.crearGasto);

module.exports = router;