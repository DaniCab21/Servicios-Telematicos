//Importe los módulos
var resultado = require("./gestordb");
const express = require("express");
const app = express();
const puerto = 5000;
//Atención de la solicitud
app.get("/", async function (req, res) {
  async function Leer() {
    //Función asincrona
    var memoria = [];
    await //Espere
    resultado
      .then((value) => {
        res.send(value);
        console.log(value.length)
      })
      .catch((err) => {
        console.log(err);
      });
    return memoria;
  }
  Leer(); //Ejecutar la función
});
//Oyente
app.listen(puerto, () => {
  console.log("Ejecutando express");
});
