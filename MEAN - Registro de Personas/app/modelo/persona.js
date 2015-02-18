// Importar mongoose para crear el modelo en la base de datos
var mongoose = require('mongoose');

// Exportar el modelo de persona (El modelo tiene _id y __v para id y controlar la versión por sí mismo)
module.exports = mongoose.model('Persona', {
	nombre: 	String,
	apellido: 	String,
	edad: 		String,
	casado: 	Boolean,
	telefono: 	String
});