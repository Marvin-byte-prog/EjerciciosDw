let saludo = (nombre, apellido, callback) => {
    //se retorna el saludo
    console.log(`Hola ${nombre} ${apellido}`);

    //despues de hacer el saludo
    callback();
} 

saludo("carlos", "salazar", function () {
    console.log('Luego de saludar se ejecuta el callback')
})
    
