//configure express
const express = require('express');
const app = express();

//configure mongo
const mongoClient = require('mongodb').MongoClient;
var url = process.env.MONGOLAB_URI | 'mongodb://localhost:8000/urldbmakkbit';



//configure pug
app.set('views','./views');
app.set('view engine','pug');


//imports app js files
const api = require('./app/api/url-shortener.js');
const routes = require('./app/routes/index.js');


mongoClient.connect(url, (err, db) =>{

	if (err)
		throw err;
	else
		console.log('Successfully connected to MongoDB');

	routes(app);

	api(app, db);

	const port = process.env.PORT || 8080;
	app.listen(port, () => {
		console.log('Listening on port: '+ port);
	});

});

