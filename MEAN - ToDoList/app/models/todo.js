// get mongoose for create model
var mongoose = require('mongoose');

// export the model (itself has _id and __v)
module.exports = mongoose.model('Todo', {
	text : String,
	done : Boolean
});