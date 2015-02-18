// Configuracion del servidor
// 
// Inicializar de librerias y frameworks

var express 		= require('express');
var app     		= express(); 							// Utilizar express
var mongoose		= require('mongoose'); 					// Mongoose para mongodb
var puerto  		= process.env.PORT || 85; 				// Coger el puerto 85
var db				= require('./config/db'); 				// Cargar configuración de la base de datos
var bodyParser     	= require('body-parser');				// Body-Parser
var methodOverride 	= require('method-override');			// method-override

// configuración ======================================================================================
mongoose.connect(db.url); 	// Conectar con la base de datos

// Antigua manera de conectar con la base de datos, mejor la de arriba teniendo todo más ordenado
// Hacer la conexión a la base de datos de Mongo con nombre "EjemploMEAN"
// mongoose.connect('mongodb://85.214.124.97:27017/EjemploMEAN'); 	

// Añadir configuración de angular y librerias de Express a la configuración
app.use(express.static(__dirname + '/public')); 				// Configurar la carpeta de archivos estáticos /public/img será /img para los usuarios
app.use(express.logger('dev')); 								// Activar el log en modo 'dev' para mostrar todos los mensajes por consola

// get all data/stuff of the body (POST) parameters - Obtener los datos del cuerpo y codificarlos para los parametros POST
app.use(bodyParser.json()); 									// parsear a json - application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parsear a json - application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); 			// parsear a utf8 - application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); 				// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT

// Cargar los endpoints de la API REST
require('./app/routes.js')(app);

// Coger el puerto para escuchar peticiones
app.listen(puerto);
console.log("APP por el puerto " + puerto);
