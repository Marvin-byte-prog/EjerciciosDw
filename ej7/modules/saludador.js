let saludo = (nombre, apellido, callback) => {
    //se retorna el saludo
    console.log(`Hola ${nombre} ${apellido}`);

    //despues de hacer el saludo
    callback();
} 


exports.saludar = saludo;