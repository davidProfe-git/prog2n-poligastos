const express = require("express");
const cors = require("cors");
const app = express();

// Cambiamos "router" por "routes" para que coincida con el nombre de tu carpeta:
const router = require("./routes/router"); 

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.listen(4000, () => {
    console.log("Servidor corriendo en http://localhost:4000");
});
