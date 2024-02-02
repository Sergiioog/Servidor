import http from 'node:http';
import fs from 'node:fs'
import escritura from './escritura.mjs'
import escribirFichero from './escritura.mjs';

const HOST = '127.0.0.1';
const PORT = 3000;

const stream = fs.createWriteStream('./logs/registros.txt', { flags: 'a' });

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        fs.readFile('./pages/index.html', 'utf-8', (error, data) => {
            if (error) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Error interno del servidor " + error);
            } else {
                escribirFichero(stream, req.url, PORT, HOST); // Función para escribir el fichero importada
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
                
            }
        });

    } else if (req.url === "/pages/pagina1.html") {

        fs.readFile('./pages/pagina1.html', 'utf-8', (error, data) => {
            if (error) {
                res.writeHead(500, {"Content-Type":"text/plain"});
                res.end("Error interno del servidor: " + error);
            } else {
                escribirFichero(stream, req.url, PORT, HOST); // Función para escribir el fichero importada
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(data);
            }
        });

    } else if (req.url === "/pages/pagina2.html") {

        fs.readFile('./pages/pagina2.html', 'utf-8', (error, data) => {
            if (error) {
                res.writeHead(500, {"Content-Type":"text/plain"});
                res.end("Error interno del servidor: " + error);
            } else {
                escribirFichero(stream, req.url, PORT, HOST); // Función para escribir el fichero importada
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(data);
            }
        });

    } else if (req.url === "/pages/pagina3.html") {

        fs.readFile('./pages/pagina3.html', 'utf-8', (error, data) => {
            if (error) {
                res.writeHead(500, {"Content-Type":"text/plain"});
                res.end("Error interno del servidor: " + error);
            } else {
                escribirFichero(stream, req.url, PORT, HOST); // Función para escribir el fichero importada
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(data);
            }
        });

    } else {

        fs.readFile('./pages/404.html', 'utf-8', (error, data) => {
            if (error) {
                console.log("Lo sentimos, la página de error no se pudo mostrar")
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Error interno del servidor");
            } else {
                escribirFichero(stream, req.url, PORT, HOST); // Función para escribir el fichero importada
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            }
         });
    }

});


server.listen(PORT, HOST, () => {
    console.log(`Escuchando el servidor en el puerto ${PORT} y en la dirección http://${HOST}:${PORT}/`);
});



