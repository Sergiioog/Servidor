import http from 'node:http';
import fs from 'node:fs'
import escribirFichero from './escritura.mjs';
import rutas from './rutas.mjs';


function controladorRutas(ruta,res,PORT,HOST) {
    const stream = fs.createWriteStream('./logs/registros.txt', { flags: 'a' }); //Creamos el stream que se va a pasar al escritura.mjs

    if (ruta === "/") { //Ruta base

        fs.readFile('./pages/home.html', 'utf-8', (error, data) => { //Leer archivo especificado
            if (error) { //Si error
                res.writeHead(500, {"Content-Type": "text/plain"}); //Que me escriba esta cabecera
                res.end("Error interno del servidor " + error); //Y me diga esto
            } else {
                escribirFichero(stream, ruta, PORT, HOST); // Función para escribir el fichero importada
                res.writeHead(200, {"Content-Type": "text/html"}); //Que me enseñe el html de esa ruta
                res.end(data); //Que finalice la conexion con los datos extraidos
                
            }
        });

    } else if (ruta === "/pages/about.html") {

        fs.readFile('./pages/about.html', 'utf-8', (error, data) => {
            if (error) {
                res.writeHead(500, {"Content-Type":"text/plain"});
                res.end("Error interno del servidor: " + error);
            } else {
                escribirFichero(stream, ruta, PORT, HOST); // Función para escribir el fichero importada
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(data);
            }
        });

    } else if (ruta === "/pages/contact.html") {

        fs.readFile('./pages/contact.html', 'utf-8', (error, data) => {
            if (error) {
                res.writeHead(500, {"Content-Type":"text/plain"});
                res.end("Error interno del servidor: " + error);
            } else {
                escribirFichero(stream, ruta, PORT, HOST); // Función para escribir el fichero importada
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(data);
            }
        });

    } else if (ruta === "/pages/faq.html") {

        fs.readFile('./pages/faq.html', 'utf-8', (error, data) => {
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
        fs.readFile('./pages/404.html', 'utf-8', (error, data) => { //Para el resto de casos que me muestre el html 404
            if (error) {
                console.log("Lo sentimos, la página de error no se pudo mostrar")
                res.writeHead(500, {"Content-Type": "text/plain"}); //Si hay errores ocurre esto
                res.end("Error interno del servidor");
            } else {
                escribirFichero(stream, ruta, PORT, HOST); //Si no que me muestre el contenido del fichero 404.html
                res.writeHead(404, {"Content-Type": "text/html"});
                res.end(data);
            }
        });
    }
    
}
export default controladorRutas; //La exportamos para usarla en otros archivos