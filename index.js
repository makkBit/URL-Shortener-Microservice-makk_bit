const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

//configure pug
app.set('views','./views');
app.set('view engine','pug');

app.get('/',(req,res) => {
	res.render('index');
});

app.listen(port, () => {
	console.log('Listening on port: '+ 8080);
})