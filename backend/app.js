const express = require("express")
const app = express()
const router = require("./router/router")
const cors = require("cors")

app.use(cors())
app.use('/api',router)

//app.get("/prog2",(request, response)=>{
//    response.send("<h1>Hola clase porg 2 quiero break<h1>")
//})

app.listen(4000,()=>{
    console.log("cree un servidor en JS!!");
})