const express = require("express");
const app = express();
const puerto = 5000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

/*const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));*/

app.get("/", (req, res) => {
  res.render("index", {
    nombre: "Daniel Cabiativa",
    codigo: "20202373014",
    edad: 28,
    carrera: "Ingeniería en Telecomunicaciones",
  });
});

app.get("/aleja", (req, res) => {
    res.render("datosAleja", {
      nombre: "Alejandra Santos",
      codigo: "1234567890",
      edad: 25,
      carrera: "Jefe Enfermera",
    });
  });
  

/*app.post('/',(req, res)=>{
    var mensaje = req.body.mensaje;
    console.log(mensaje);
    res.send('El mensaje es: '+mensaje);
});*/

app.listen(puerto, () => {
  console.log("Ejecutando express");
});
