import http from 'node:http';
import fs from 'node:fs'

const HOST = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end("Hola que tal estas")
});

server.listen(3000, () => {
   console.log(`Escuando el servidor en el puerto ${PORT} y en la dirección
    http://${HOST}:${PORT}/`)
});


