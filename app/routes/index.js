module.exports = function(app){

	//home
	app.get('/', (req,res) => {
		res.render('index');
	});
	
	//when no (emptly) url is provided 
	app.get('/new', (req,res) => {
		res.json({
			error:'you need a enter a url',
			example:'https://little-url.herokuapp.com/new/https://www.google.com'
		});
	});

};