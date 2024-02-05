import http from 'node:http';
import fs from 'node:fs'
import escritura from './escritura.mjs'
import escribirFichero from './escritura.mjs';
import rutas from './rutas.mjs';
import controladorRutas from './rutas.mjs';

const HOST = '127.0.0.1';
const PORT = 3000;


const server = http.createServer((req, res) => {
    controladorRutas(req.url,res,PORT,HOST)
});


server.listen(PORT, HOST, () => {
    console.log(`Escuchando el servidor en el puerto ${PORT} y en la dirección http://${HOST}:${PORT}/`);
});



