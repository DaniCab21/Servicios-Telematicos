//Requerir express, path, morgan y mysql
const express = require('express');
const path = require('path');
const app = express();
//Importar las rutas las cuales se encuentran en el archivo routes\users.js
const productoRoutes = require('./routes/productos');
//Configuración de Express
//Tome un puerto del SO, si no existe, tome el puerto 3000
app.set('port', process.env.PORT || 3000);
//Carpeta de las vistas de la aplicación
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//Static images
app.use(express.static("images"));
//Middlewares
app.use(express.urlencoded({extended: false}));
//Routes
app.use('/', productoRoutes);
//Iniciando servidor
app.listen(app.get('port'), () => {
    console.log('Server started on port 3000');
});



