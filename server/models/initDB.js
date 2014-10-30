var mongoose = require ("mongoose");
var autoIncrement = require('mongoose-auto-increment');
var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://127.0.0.1:27017/bd_info';



module.exports.mongoDbConnection  = function(){
	mongoose.connect(uristring, function (err, res) {
	  if (err) {
	  	console.log ('ERROR connecting to: ' + uristring + '. ' + err);
	  } else {
	  	console.log ('Succeeded connected to: ' + res);
	  }
	});


}