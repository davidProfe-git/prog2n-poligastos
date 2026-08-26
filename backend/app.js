const express = require("express")
const app = express()
const router = require("./router")
const cors = require ("cors")

app.use('/api',router)
app.use (cors)
app.listen(3000,()=>{
    console.log ("cree un servidor con el diablo D:")
})