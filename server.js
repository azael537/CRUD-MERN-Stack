const express = require('express');
const app = express();

// importar conexion MongoDB
const archivoBD = require('./conexion');



//Importacin del archivo de rutas y modelo de usuario
const rutausuario = require('./rutas/usuario');



// Importar body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));



app.use('/api/usuario', rutausuario);



app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor BackEnd Node.js Corriendo...')
});

//Configuration server basic

app.listen(5000, function() {
    console.log('El servidor NODE esta corriendo correctamente');
});