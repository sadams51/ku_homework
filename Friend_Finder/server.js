
//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//set up express app
var app = express();
var PORT = 3000;

//set up express app to handle data parsing 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./app/public")));


app.get("/", function(request, response) {
	res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function(request, response) {
	res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

//should this be just 'require' - or set the variable?
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");



app.listen(PORT, function() {
	console.log("Listening on port " + PORT)
});


