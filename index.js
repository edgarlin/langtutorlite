const express = require('express');
const path = require('path');
//const servlet_app = require('servlets/servlet1');
//const filter_app = require('filters/filter1');
//const fs = require('fs');
//const http = require('http');

var rootApp = express();
//var servletApp = servlet_app();

const PORT = process.env.PORT || 5000;

//rootApp.use(['/adm*n', '/manager'], servletApp);
//rootApp.use(filter_app({ option1: '1', option2: '2' }));

rootApp.use(express.static(path.join(__dirname, 'public')));
rootApp.set('views', path.join(__dirname, 'views'));
rootApp.set('view engine', 'ejs');
rootApp.get('/', (req, res) => res.render('pages/index'));
rootApp.get('/port', (req, res) => res.write(PORT));
rootApp.listen(PORT, () => console.log(`Listening on ${ PORT }`));