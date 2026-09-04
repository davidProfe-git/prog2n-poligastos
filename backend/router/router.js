const express = require("express")
const router = express.Router()
const controller = require("../controller/gastos.controller")


router.get("/gastos", controller.ConsultarGastos)
router.get("/categoria", controller.ConsultarCategoria)
router.post("/registro-gastos",controller.CrearGasto)

module.exports = router
