import http from 'node:http';
import fs from 'node:fs'
import escritura from './escritura.mjs'
import escribirFichero from './escritura.mjs';

const HOST = '127.0.0.1';
const PORT = 3000;

const stream = fs.createWriteStream('./logs/registros.txt', { flags: 'a' });

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    

    
    
    escribirFichero(stream,PORT,HOST); //Funcion para escribir el fichero importada


    res.end("Hola que tal estas");
});

server.listen(PORT, HOST, () => {
    console.log(`Escuchando el servidor en el puerto ${PORT} y en la dirección http://${HOST}:${PORT}/`);
});



