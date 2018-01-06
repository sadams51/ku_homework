

var express = require("express");

var path = require("path");

var app = express.Router(); 


function htmlRoutes(app) {
	//get route to home page 
	app.get("/", function(request, response) {
		response.sendFile(path.join(__dirname, "../public/home.html"));
	});

//get route to survey page
	app.get("/survey", function(request, response) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
};


module.exports = htmlRoutes;