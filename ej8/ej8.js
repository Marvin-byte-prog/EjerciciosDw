var http = require('http')
const port = 3001;
http.createServer(function (req,res){
    res.write('Bienvenidos a Node.js Server Side')
    res.end();
}).listen(port)

console.log(`Escuchando en el puerto ${port}`)