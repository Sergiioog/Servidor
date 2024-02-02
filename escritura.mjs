
function escribirFichero(stream,ruta,port,host) {
    stream.write(`\n Usuario entrando al programa, PUERTO: ${port}, HOST: ${host} en la RUTA: ${ruta}`);
}

export default escribirFichero;