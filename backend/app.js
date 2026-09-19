const express = require("express");
const cors = require("cors");
const router = require("./router/router");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(4000, () => {
    console.log("Servidor funcionando en http://localhost:4000");
});