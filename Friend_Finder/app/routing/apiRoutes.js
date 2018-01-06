
var express = require("express");

var path = require("path");
var friendsArray = require("../data/friends.js");

//var app = express.Router();



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
	var friend = request.body;

	var userScores = friend.answers;
	var resultName = "";
	var resultPic = "";
	var totalDifference = 1000;

	//for each user 
	for (var i = 0; i < friendsArray.length; i++) {
		var difference = 0;

		//for each response 
		for (var j = 0; j < userScores.length; j++) {
			console.log(friendsArray[i].answers[j]);
			//PROBLEM with friendsArray.answers.....
			difference += (Math.abs(userScores[j] - friendsArray[i].answers[j]));
		}

		//lowest difference is the match 
		if (difference < totalDifference) {
			totalDifference = difference; 
			resultName = friendsArray[i].name;
			resultPic = friendsArray[i].photo;
		}
	}

	friendsArray.push(friend);
	response.json({
		resultName: resultName,
		resultPic: resultPic
	});

}


module.exports = apiRoutes;