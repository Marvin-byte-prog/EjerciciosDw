var instancia = require('./modules/saludador')

instancia.saludar("carlos", "salazar", function () {
    console.log('Luego de saludar se ejecuta el callback')
})
