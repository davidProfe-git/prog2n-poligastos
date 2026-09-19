const express = require("express");
const router = express.Router();

const GastosController = require("../controller/gastos.controller");

router.get("/movimientos", GastosController.consultarGastos);
router.get("/categorias", GastosController.consultarCategorias);
router.post("/movimientos", GastosController.crearMovimiento);
router.delete("/movimientos/:id", GastosController.eliminarMovimiento);
router.put("/movimientos/:id", GastosController.editarMovimiento);

module.exports = router;