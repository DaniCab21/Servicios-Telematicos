const express = require("express");
const app = express();
const puerto = 5000;
const bodyParser = require("body-parser");

var articulosAñadidos = 0;
var vectorCarrito = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Pagina Principal - Proyecto 2",
    url1: "https://http2.mlstatic.com/D_NQ_NP_993038-MCO49843825574_052022-O.webp",
    url2: "https://http2.mlstatic.com/D_NQ_NP_693304-MCO51714287292_092022-O.webp",
    url3: "https://http2.mlstatic.com/D_NQ_NP_786173-MCO51721630365_092022-O.webp",
    cantidades: "Seleccione el producto que desea comprar",
    display: "display:none;",
    precio: "Seleccione el producto que desea comprar",
  });
});

app.get("/reloj", (req, res) => {
  var cantidadesDisponibles = 5;
  var precioProducto = 100;
  res.render("index", {
    titulo: "Reloj",
    url1: "https://http2.mlstatic.com/D_NQ_NP_993038-MCO49843825574_052022-O.webp",
    url2: "https://http2.mlstatic.com/D_NQ_NP_684083-MCO49843754864_052022-O.webp",
    url3: "https://http2.mlstatic.com/D_NQ_NP_913315-MCO49843733971_052022-O.webp",
    cantidades: cantidadesDisponibles,
    display: "display:block; width:30%",
    precio: precioProducto,
  });
});

app.get("/moto", (req, res) => {
  var cantidadesDisponibles = 5;
  var precioProducto = 15000;
  res.render("index", {
    titulo: "Motocicleta",
    url1: "https://http2.mlstatic.com/D_NQ_NP_873368-MLA51714448665_092022-O.webp",
    url2: "https://http2.mlstatic.com/D_NQ_NP_693304-MCO51714287292_092022-O.webp",
    url3: "https://http2.mlstatic.com/D_NQ_NP_614753-MCO51714289292_092022-O.webp",
    cantidades: cantidadesDisponibles,
    display: "display:block; width:100px",
    precio: precioProducto,
  });
});

app.get("/carro", (req, res) => {
  var cantidadesDisponibles = 5;
  var precioProducto = 30000;
  res.render("index", {
    titulo: "Carro",
    url1: "https://http2.mlstatic.com/D_NQ_NP_851843-MCO51721316916_092022-O.webp",
    url2: "https://http2.mlstatic.com/D_NQ_NP_659465-MCO51721621443_092022-O.webp",
    url3: "https://http2.mlstatic.com/D_NQ_NP_786173-MCO51721630365_092022-O.webp",
    cantidades: cantidadesDisponibles,
    display: "display:block; width:100px",
    precio: precioProducto,
  });
});

app.post("/carritoCompras", (req, res) => {
  articulosAñadidos++;
  var cantidadSeleccionada = req.body.cantidad;
  var precio = req.body.precio;
  var articulo = req.body.articulo;
  var precioTotal = precio * cantidadSeleccionada;

  objSelect = {
    titulo: "Carrito de Compras",
    articulosAñadidos: articulosAñadidos,
    articulo: articulo,
    cantidadSeleccionada: cantidadSeleccionada,
    precioTotal: precioTotal
  };

  vectorCarrito.push(objSelect);
  vectorCarrito.forEach((element) => {
    console.log(element);
  });
  res.render("carritoCompras", {vector: vectorCarrito});
});

app.listen(puerto, () => {
  console.log("Ejecutando express en el puerto: " + puerto);
});
