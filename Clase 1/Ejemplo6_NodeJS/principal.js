const express = require("express");
const app = express();
const puerto = 5000;

const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/',(req, res)=>{
    var mensaje = req.body.mensaje;
    console.log(mensaje);
    res.send('El mensaje es: '+mensaje);
});

app.listen(puerto,()=>{
    console.log('Ejecutando express');
});