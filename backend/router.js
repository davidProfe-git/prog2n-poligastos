const express = require ("express")
const router = express.Router()
const controller=require("../backend/controller/gastos.controller")

router.get ("/gastos", controller.consultarGastos)
router.get ("/categorias", controller.consultarCategorias)
router.post ("/registro-gastos", controller.registrarMovimiento)
router.delete ("/gastos/:id", controller.eliminarMovimiento)
module.exports=router