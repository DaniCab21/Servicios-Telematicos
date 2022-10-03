const controller = {};
let productos = [];

controller.agregarProducto = (req, res) => {
  if (req.method === "GET") {
    res.render("AgregarProducto");
  }
  if (req.method === "POST") {

    const data = req.body;
    data.id = productos.length+1
    productos.push(data);
    res.redirect("/listar");
  }
};

controller.listar = (req, res) => {
    res.render("Detalle", { productos });
};

controller.detalles = (req, res) => {
    let producto = {}
    for(let p in productos) {
        if(productos[p].id == req.params.id) {
            producto = productos[p];
        }
    }
    res.render("Detalle",{productos, producto});
};

module.exports = controller;
