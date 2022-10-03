const express = require("express");
const app = express();
const puerto = 5000;

app.get('/',(req, res)=>{
    res.send('Hola desde express madafacas')
});

app.get('/pagina',(req, res)=>{
    res.send('Cargar Otra página')
});

app.listen(puerto,()=>{
    console.log('Ejecutando Express')
});