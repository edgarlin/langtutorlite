const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;


const app = express();

var post_handler = function(req,res) {
	res.render('pages/index_post');
};


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('pages/index'));
app.post('/',post_handler);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
