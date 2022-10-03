const http = require("http");
const servidor = http.createServer;
const server = http.createServer((req,res)=>{
    res.end("Atendiendo una solicitud")
});
const puerto = 3000;
server.listen(puerto,()=>{
    console.log('El servidor está corriendo en el puerto '+puerto)
})