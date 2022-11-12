const express = require("express");
const app = express();
const puerto = 5000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index", {

  });
});

app.listen(puerto, () => {
  console.log("Ejecutando express en el puerto: " + puerto);
});
