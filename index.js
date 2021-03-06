const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Creando el servidor
const app = express();

//Conectar a la base de datos.
conectarDB();

//Habilitar cors
app.use(cors());

//Habilitar express.json
app.use(express.json({ extended: true }))

//Puerto de la app.
const PORT = process.env.PORT || 4000; //Cualquier puerto excepto el 3000 que es el del cliente.

//ImPORTar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

//Arrancando la app o server.
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});