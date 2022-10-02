const logger = require('logplease')
const Logger = logger.create('utils')
var resultado = require('./node_modules/numeros')

if(resultado.esPar(600) == true){
    Logger.info(`El numero es par`)
}
else{
    Logger.error(`El numero no es par`)
}