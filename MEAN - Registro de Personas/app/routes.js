// Importar el controlador de Persona para la api REST
var Controller = require ('./controller');

// Exportar la API REST
module.exports = function(app) {
	// Devolver todos los Personas
	app.get('/api/personas', Controller.getPersonas);
	// Añadir una nueva Persona
	app.post('/api/personas', Controller.addPersona);
	// Modificar los datos de una Persona
	app.put('/api/personas/:persona_id', Controller.updatePersona);
	// Borrar una Persona
	app.delete('/api/personas/:persona_id', Controller.removePersona);

	// APP ----------------------------------------------------------------------------
	//  Carga única de la vista al ser una SPA - angular manejará el frontend
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); 
	});
};