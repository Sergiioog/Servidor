
function escribirFichero(stream,ruta,port,host) { //Funcion que escribe los datos del host en el fichero junto con la ruta que visita
    stream.write(`\n Usuario entrando al programa, PUERTO: ${port}, HOST: ${host} en la RUTA: ${ruta}`);
}

export default escribirFichero; //exportamos la funcion