var express = require('express');
var app = express();
var path = require('path');

// Port
var port = 8080;

// Serve static files
app.use(express.static(__dirname + '/app'));

// Provide entry point
app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/index.html'));
});

app.listen(port);

console.log('App running on port', port);