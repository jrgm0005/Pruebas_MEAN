// Crear el modulo orincipal de la aplicación
angular.module('MainApp', [])

// Controlador principal de la aplicación
function mainController($scope, $http) {
	// Variables de scope que se van a utitlizar
	$scope.newPersona = {};  	// formulario nueva Persona
	$scope.personas = {};		// Array de Persona
	$scope.selected = false;	// Persona seleccionada

	// Obtener todos los datos de la base de datos
	$http.get('/api/personas').success(function(data) {
		$scope.personas = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});


	// Registrar a una Persona
	$scope.registrarPersona = function() {
		$http.post('/api/personas', $scope.newPersona)
		.success(function(data) {
				$scope.newPersona = {}; // Borrar los datos del formulario				
				$scope.personas = data; // Volver a mostrar los datos de las personas
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Editar los datos de una Persona
	$scope.modificarPersona = function(newPersona) {
		$http.put('/api/personas/' + $scope.newPersona._id, $scope.newPersona)
		.success(function(data) {
				$scope.personas = data;  // Volver a mostrar los datos de las personas
				$scope.newPersona = {};  // Borrar los datos del formulario
				$scope.selected = false; // No hay ninguna seleccionada
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Borrar un objeto Persona conocido su _id
	$scope.borrarPersona = function(newPersona) {
		$http.delete('/api/personas/' + $scope.newPersona._id)
		.success(function(data) {
			$scope.newPersona = {};  // Borrar los datos del formulario
			$scope.personas = data;  // Volver a mostrar los datos de las personas
			$scope.selected = false; // No hay ninguna seleccionada
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Coger el objeto seleccionado en la tabla
	$scope.seleccionarPersona = function(persona) {
		$scope.newPersona = persona;  // Persona seleccionada
		$scope.selected = true;		  // Persona seleccionada
		console.log($scope.newPersona, $scope.selected);
	};

	// Deseleccionar la Persona seleccionada
	$scope.deseleccionarPersona = function() {
		$scope.newPersona = {};  			// Persona seleccionada
		$scope.selected = false;		  	// Persona seleccionada
		console.log($scope.newPersona, $scope.selected);
	};


}