const express = require("express")
const router = express.Router()
const controller = require("../controller/gastos.controller")


router.get("/gastos", controller.consultarGastos)
router.get("/categorias",controller.consultarCategoria)

//router.post("/registro-gastos",)
module.exports = router
