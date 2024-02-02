import http from 'node:http';
import fs from 'node:fs'
import escribirFichero from './escritura.mjs';
import rutas from './rutas.mjs';


function controladorRutas(ruta,res,PORT,HOST) {
    const stream = fs.createWriteStream('./logs/registros.txt', { flags: 'a' });

    if (ruta === "/") {

        fs.readFile('./pages/index.html', 'utf-8', (error, data) => {
            if (error) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Error interno del servidor " + error);
            } else {
                escribirFichero(stream, ruta, PORT, HOST); // Función para escribir el fichero importada
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
                
            }
        });

    } else if (ruta === "/pages/pagina1.html") {

        fs.readFile('./pages/pagina1.html', 'utf-8', (error, data) => {
            if (error) {
                res.writeHead(500, {"Content-Type":"text/plain"});
                res.end("Error interno del servidor: " + error);
            } else {
                escribirFichero(stream, ruta, PORT, HOST); // Función para escribir el fichero importada
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(data);
            }
        });

    } else if (ruta === "/pages/pagina2.html") {

        fs.readFile('./pages/pagina2.html', 'utf-8', (error, data) => {
            if (error) {
                res.writeHead(500, {"Content-Type":"text/plain"});
                res.end("Error interno del servidor: " + error);
            } else {
                escribirFichero(stream, ruta, PORT, HOST); // Función para escribir el fichero importada
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(data);
            }
        });

    } else if (ruta === "/pages/pagina3.html") {

        fs.readFile('./pages/pagina3.html', 'utf-8', (error, data) => {
            if (error) {
                res.writeHead(500, {"Content-Type":"text/plain"});
                res.end("Error interno del servidor: " + error);
            } else {
                escribirFichero(stream, ruta, PORT, HOST); // Función para escribir el fichero importada
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
                escribirFichero(stream, ruta, PORT, HOST);
                res.writeHead(404, {"Content-Type": "text/html"});
                res.end(data);
            }
        });
    }
    
}
export default controladorRutas;