const express = require ("express")
const router = express.Router()
const controller=require("../backend/controller/gastos.controller")

router.get ("/gastos", controller.consultarGastos)

module.exports=router