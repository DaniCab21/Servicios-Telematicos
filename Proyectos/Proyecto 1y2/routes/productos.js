const express = require('express');
const productoControlador = require('../controllers/ProductoControlador');
//Método para agregar rutas
const router = express.Router();
router.get('/', productoControlador.agregarProducto)
router.post('/crearProducto', productoControlador.agregarProducto)
router.get('/crearProducto', productoControlador.agregarProducto)
router.get('/listar', productoControlador.listar)
router.get('/detalles/:id', productoControlador.detalles)

module.exports = router;