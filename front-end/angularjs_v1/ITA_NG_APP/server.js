'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
    http = require('http'),
    path = require('path');

var config = require('./config');

// Init the express application
var app = express();

app.use('/', express.static(path.resolve('./public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Globbing express routing files
var router = express.Router();
config.getGlobbedFiles('./app/routes/**/*.js').forEach(function(routePath) {
    require(path.resolve(routePath))(router);
});

router.get('/', function(req, res, next) {
    res.render('./index');
});
app.use('/', router);

var port = 8080;
var httpServer = http.createServer(app);

// Start the app by listening on <port>
httpServer.listen(port, function() {
    // Logging initialization
    console.log('--');
    console.log('ITA_NG_APP', 'application started');
    console.log('Port:\t\t\t\t', port);
    console.log('--');
});

// Expose app
var exports;
exports = module.exports = app;
