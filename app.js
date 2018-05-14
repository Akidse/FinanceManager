var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./lib/config');
var bodyParser = require('body-parser');
var verifyToken = require('./lib/verifyToken');

//include mongodb models
var CategoryModel = require('./api/model/categoryModel');
var TransactionModel = require('./api/model/transactionModel');
var UserModel = require('./api/model/userModel');

//connect to db
mongoose.connect(config.get('mongoose:uri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	console.log('mongodb connected');
});

var app = express();

//use body-parser middleware for post-requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//include routes
var authRoutes = require('./api/route/authRoutes');
var categoryRoutes = require('./api/route/categoryRoutes');
var transactionRoutes = require('./api/route/transactionRoutes');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
authRoutes(app);
//app.use('/api', verifyToken);//middleware for user authorization

categoryRoutes(app);
transactionRoutes(app);

//use angular dist files for frontend
app.use(express.static(path.join(__dirname, '/dist/financemanager/')));
//app.use(express.static(__dirname + "/dist/financemanager/"));

//handle wrong requests
app.use(function(req, res) {
  res.status(200).send({error: req.originalUrl + ' not found'})
});

app.listen(config.get('port'));

console.log("Finance Manager starten on port " + config.get('port'));