const express = require("express");
const router = express.Router();
const conexion = require("./database/db");

router.get("/", (req, res) => {
    conexion.query("SELECT * FROM peliculas", (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.render("index", {
          results: results,
        });
      }
    });
  });

  router.get("/copias", (req, res) => {
    conexion.query("SELECT * FROM copias", (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.render("copias", {
          results: results,
        });
      }
    });
  });

  router.get("/clientes", (req, res) => {
    conexion.query("SELECT * FROM clientes", (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.render("clientes", {
          results: results,
        });
      }
    });
  });

  router.get("/prestamos", (req, res) => {
    conexion.query("SELECT * FROM prestamos", (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.render("prestamos", {
          results: results,
        });
      }
    });
  });

  router.get("/editarPrestamos/:id_prestamos", (req, res) => {
    const idPrestamos = req.params.id_prestamos;
    conexion.query("SELECT * FROM prestamos WHERE id_prestamos=?",[idPrestamos], (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.render("editarPrestamos", {          
          user: results[0],
        });
      }
    });
  });

  router.get("/editarClientes/:codigoCliente", (req, res) => {
    const codigoCliente = req.params.codigoCliente;
    conexion.query("SELECT * FROM clientes WHERE codigoCliente=?",[codigoCliente], (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.render("editarClientes", {          
          user: results[0],
        });
      }
    });
  });

  router.get("/editarCopias/:id", (req, res) => {
    const id = req.params.id;
    conexion.query("SELECT * FROM copias WHERE id=?",[id], (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.render("editarCopias", {          
          user: results[0],
        });
      }
    });
  });

  router.get("/editarPeliculas/:id", (req, res) => {
    const id = req.params.id;
    conexion.query("SELECT * FROM peliculas WHERE id=?",[id], (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.render("editarPeliculas", {          
          user: results[0],
        });
      }
    });
  });

const crud = require('./controllers/crud');

router.post('/updatePeliculas',crud.updatePeliculas);  
router.post('/updateCopias',crud.updateCopias);  
router.post('/updateClientes',crud.updateClientes);  
router.post('/updatePrestamos',crud.updatePrestamos);  

module.exports = router;

