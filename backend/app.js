const express = require("express")
const app = express()
const router = require("./router/router")

app.use('/api',router)


app.listen(4000,()=>{
    console.log("Cree un servidor en JS!!")
})