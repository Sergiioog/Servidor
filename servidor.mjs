import http from 'node:http';
import fs from 'node:fs'
import escritura from './escritura.mjs'
import escribirFichero from './escritura.mjs';
import rutas from './rutas.mjs';
import controladorRutas from './rutas.mjs'; //Importamos funciones
import path from 'node:path';



const HOST = '127.0.0.1'; //HOST
const PORT = 3000; //Puerto de salida


const server = http.createServer((req, res) => { //Funcion de servidor que crea el servidor
    controladorRutas(req.url,res,PORT,HOST) //Le pasamos los datos de la request y response a la funcion controladora de rutas
});


server.listen(PORT, HOST, () => { //Le decimos que escucher el puerto 3000 y el usuario localhost
    console.log(`Escuchando el servidor en el puerto ${PORT} y en la dirección http://${HOST}:${PORT}/`);
});



