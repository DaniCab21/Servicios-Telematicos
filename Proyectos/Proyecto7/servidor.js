module.exports = function leerDatosExcel(ruta, columna, hoja) {
    const xlsx = require('xslx');
    var arregloDatos = [];
    var libro = xlsx.readFile(ruta);
    var hojaLibro = libro.SheetNames[hoja];
    var datosExcel = xlsx.utils.sheet_to_json(libro.Sheets[hojaLibro]);
    for (var itemFila of datosExcel) {
        arregloDatos.push(itemFila[columna]);
    }
    return arregloDatos;
    console.log('hola');
}