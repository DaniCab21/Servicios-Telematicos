const mysql = require("mysql2");
const conexion = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "daniel",
  database: "companydb",
});

conexion.connect((error)=>{
    if(error){
        console.log("Error: "+error);
    }
    console.log('Conectado a la base de datos.');
})

module.exports = conexion;