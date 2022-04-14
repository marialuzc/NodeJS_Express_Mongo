const express = require('express');
const Usuario = require('../models/usuario_model');
const ruta = express.Router();

// Endpoint de tipo GET para el recurso Cursos
ruta.get('/',(req, res) => {
    res.json('Respuesta a petición GET de USUARIOS funcionando correctamente');
});


module.exports = ruta;
