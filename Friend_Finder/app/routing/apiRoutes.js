
var express = require("express");

var path = require("path");
var friendsARray = require("../data/friends.js";)

var app = express.Router();



function apiRoutes(app) {

//get route - display JSON of all possible friends  
	app.get("/api/friends", function(request, response) {
		response.json(friendsArray);
	});
//post route - to handle incoming survey results & compatibility logic 
	app.post("/api/friends", function(request, response) {
		computeScore(request, response);
	});
};


function computeScore(request, response) {
	var answers = request.body;

	var userScores = answers.scores;
	var resultName = "";
	var resultPic = "";
	var totalDifference = 1000;

	//for each user 
	for (var i = 0; i < friendsArray.length; i++) {
		var difference = 0;

		//for each response 
		for (var j = 0; j < userScores.length; j++) {
			difference += (Math.abs(userScores[j] - friendsArray[i].scores[j]));
		}

		//lowest difference is the match 
		if (difference < totalDifference) {
			totalDifference = difference; 
			resultName = friendsArray[i].name;
			resultPic = friendsArray[i].photo;
		}
	}

	friendsArray.push(answers);
	response.json({
		resultName: resultName,
		resultPic: resultPic
	});

}


module.exports = apiRoutes;