const express = require("express");
const app = express();
const puerto = 5000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname+"/public"));

app.get("/", (req, res) => {
  res.render("index", {
    nombre: "Daniel Cabiativa",
    codigo: "20202373014",
    edad: 28,
    carrera: "Ingeniería en Telecomunicaciones",
  });
});

app.listen(puerto, () => {
  console.log("Ejecutando express");
});