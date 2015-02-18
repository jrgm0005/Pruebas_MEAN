// Importar el tipo de objeto Persona
var Persona = require('./modelo/persona');

// Exportar el método que obtiene todos los objetos Persona de la base de datos
// Usando mongoose para obtener todas las personas de la base de datos
exports.getPersonas = function (req, res){
	Persona.find(
		function(err, personas) {
			// En caos de error se envía el error, no se ejcutará nada después de enviarlo (res.send(err))
			if (err)
				res.send(err)
					res.json(personas); // devuelve todas las Personas en JSON		
				}
			);
}

// Exportar el método que guarda un objeto Persona en base de datos
exports.addPersona = function(req, res) {

		// Crear el objeto Persona 
		Persona.create(
			{nombre : req.body.nombre,	apellido: req.body.apellido, edad: req.body.edad, casado: req.body.casado, telefono: req.body.telefono}, 
			function(err, personas) {
				if (err)
					res.send(err);

				// Obtener y devolver todas las personas tras crear una de ellas
				Persona.find(function(err, personas) {
				 	if (err)
				 		res.send(err)
				 	res.json(personas);
				});
			});

	}

// Exportar el método que modifica un objeto Persona de la base de datos
exports.updatePersona = function(req, res){
	Persona.update( {_id : req.params.persona_id},
					{$set:{nombre : req.body.nombre, apellido: req.body.apellido, edad: req.body.edad, casado: req.body.casado, telefono: req.body.telefono}}, 
					function(err, personas) {
						if (err)
							res.send(err);

				// Obtener y devolver todas las personas tras modificar una de ellas
				Persona.find(function(err, personas) {
				 	if (err)
				 		res.send(err)
				 	res.json(personas);
				});
			});
	}

// Exportar el método que elimina un objeto Persona de la base de Datos
exports.removePersona = function(req, res) {
	Persona.remove({_id : req.params.persona_id}, function(err, personas) {
		if (err)
			res.send(err);

			// Obtener y devolver todas las personas tras borrar una de ellas
			Persona.find(function(err, personas) {
				if (err)
					res.send(err)
				res.json(personas);
			});
		});
}