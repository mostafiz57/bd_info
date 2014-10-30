var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var handlebarEng = require('express-handlebars');
var flash = require('connect-flash');
var mongoose = require('mongoose');

var Tracker = require('./libs/tracker');
var serverConfig = require('./config/server');
var dbConfig = require('./config/database');
var trackerConfig = require('./config/tracker');


Tracker.init({
	account: trackerConfig.account,
	debug: true
});

var port = serverConfig.port;

app.engine('hbs', handlebarEng(
	{extname : 'hbs',defaultLayout : 'main.hbs'}
));

app.set( 'view engine' ,'hbs');

app.use(function(err, req, res , next){
	console.log(err.statck);
	res.send(500);
});


//config routes 
require('./routes/static')(app, serverConfig);
require('./routes/main')(app, serverConfig);
require('./routes/newspaper').newspaper(app, serverConfig);
require('./models/initDB').mongoDbConnection();




//start server
app.listen(port);
console.log('Serving in port ' + port);