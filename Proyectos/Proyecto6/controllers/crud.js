const conexion = require("../database/db");

exports.updatePeliculas = (req, res) => {
  let id = req.body.id;
  let titulo = req.body.titulo;
  let anio = req.body.anio;
  let critica = req.body.critica;
  conexion.query(
    "UPDATE peliculas SET ? WHERE id=?",
    [
      {
        titulo: titulo,
        anio: anio,
        critica: critica,
      },
      id,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/");
      }
    }
  );
};

exports.updateCopias = (req, res) => {
  let id = req.body.id;
  //let numberCopy = req.body.numeroCopias;
  let deterioro = req.body.deterioro;
  let formato = req.body.formato;
  let precioAlquiler = req.body.precioAlquiler;
  conexion.query(
    "UPDATE copias SET ? WHERE id=?",
    [
      {
        //numberCopy: numberCopy,
        deterioro: deterioro,
        formato: formato,
        precioAlquiler: precioAlquiler
      },
      id,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/copias");
      }
    }
  );
};

exports.updateClientes = (req, res) => {
  let id = req.body.id;
  let nombre = req.body.nombre;
  let apellido1 = req.body.apellido1;
  let apellido2 = req.body.apellido2;
  let direccion = req.body.direccion;
  let email = req.body.email;
  conexion.query(
    "UPDATE clientes SET ? WHERE codigoCliente=?",
    [
      {
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        direccion: direccion,
        email: email,
      },
      id,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/clientes");
      }
    }
  );
};

exports.updatePrestamos = (req, res) => {
  let id = req.body.id;
  let fecha_prestamo = req.body.fechaPrestamos;
  let fecha_tope = req.body.fechaTope;
  let fecha_entregado = req.body.fechaEntregado;
  conexion.query(
    "UPDATE prestamos SET ? WHERE id_prestamos=?",
    [
      {
        fecha_prestamo: fecha_prestamo,
        fecha_tope: fecha_tope,
        fecha_entregado: fecha_entregado,
      },
      id,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/prestamos");
      }
    }
  );
};
