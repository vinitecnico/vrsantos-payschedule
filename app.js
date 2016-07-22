var express = require('express');
var app = express();
var cfenv = require('cfenv');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

var appEnv = cfenv.getAppEnv();
app.listen(appEnv.port, '0.0.0.0', function() {
	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());