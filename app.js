var express = require('express');
var app = express();
var cfenv = require('cfenv');
var bodyParser = require('body-parser');
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

// Connection URL
var url = 'mongodb://admin:v8twanzo@ds023455.mlab.com:23455/payschedule';
// Use connect method to connect to the server
var db;
mongodb.MongoClient.connect(url, function(err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }    
  require('./api/user.js')(app,database,bodyParser,ObjectID);
  console.log("Database connection ready");  
});

app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/listUser', express.static(__dirname + '/public'));

var appEnv = cfenv.getAppEnv();

app.use(/* @callback */ function(req, res, next) {  
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(appEnv.port, '0.0.0.0', function() {
	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());