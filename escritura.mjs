
function escribirFichero(stream,port,host) {
    stream.write(`\n Usuario entrando al programa, PUERTO: ${port}, HOST: ${host}`);
    stream.end();
    console.log("Escritura completada");
}

export default escribirFichero;