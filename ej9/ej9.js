const express = require('express')
const port = 3001
const app = express();

app.get('/',(req,res) =>{
    res.send('Bienvenidos a Node.js Server Side')
})
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})