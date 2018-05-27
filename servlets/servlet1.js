const express = require('express');
var app = express();


module.exports = function(options) {
    app.on('mount', function(parent) {
        console.log('servlet Mounted');
        console.log(parent); // refers to the parent app
    });

    app.get('/', function(req, res) {
        res.send('servlet Homepage');
    });

    app.get('/:id', function(req, res) {
        res.send(req.params.id);
    });

    return;
}