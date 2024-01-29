import http from 'node:http';
import fs from 'node:fs'
// import enrutador from './enrutador.mjs';

const HOST = '127.0.0.1';
const PORT = 3000;

const SERVER = http.createServer( (req,res) => {
    
    /*------REGISTROS------*/
    let archivoReg = fs.createWriteStream('registros.txt', {flags: 'a'});
    archivoReg.write(
        "Hola caracola"
    )
    archivoReg.end();
    /*------REGISTROS------*/

})

SERVER.listen(PORT, HOST, () => {
    console.log(`Servidor corriendo en http://${HOST}:${PORT}/`)
});