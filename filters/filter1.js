const express = require('express');
var app = express();

module.exports = function(options) {
    return function(req, res, next) {
        next();
    };
};