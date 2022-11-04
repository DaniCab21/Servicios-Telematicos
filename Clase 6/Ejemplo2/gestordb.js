async function consulta() {
    //Consulta optimizada
    const mysql = require('mysql2/promise');
    //Crear conexión
    const connection = await mysql.createConnection({
        host             : 'localhost',
        port             : '3306',
        user             : 'root',
        password         : 'daniel',
        database         : 'mydb',
    });
    //Realizar query
    const [Filas, Campos] = await(connection.execute('SELECT * FROM peliculas'));
    connection.end();
    return Filas;
}
module.exports=consulta();
 