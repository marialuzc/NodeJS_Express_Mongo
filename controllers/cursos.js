const express = require('express');
const Curso = require('../models/curso_model');
const ruta = express.Router();

// Endpoint de tipo GET para el recurso Cursos
ruta.get('/',(req, res) => {
    res.json('Respuesta a petición GET de cursos funcionando correctamente');
});

module.exports = ruta;