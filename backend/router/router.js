const express = require("express")
const router = express.Router()
const controller = require("../controller/gastos.controller")


router.get("/gastos", controller.consultarGastos)
router.get("/movimeintos",(req,res)=>{
    res.send("hola")
})


module.exports = router
