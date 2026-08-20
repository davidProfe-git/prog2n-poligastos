const express = require("express")
const router = express.Router()
const controller = require("../controller/gastos.controller")


router.get("/gastos", controller.ConsultarGastos)


module.exports = router 