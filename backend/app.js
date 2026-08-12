const express = require("express")
const app = express()


app.get("/prog2",(request, response)=>{
    response.send("<h1>Hola clase de prog 2 quiero break</h1>")
})


app.listen(4000,()=>{
    console.log("Cree un servidor en JS!!")
})