
var request = require("request");
var Twitter = require("twitter");
var twitterKeys = require("./keys.js");
//////can i put all the 'requires' at the top? or do they need to be in 
//the functions?


var command = process.argv[2];

var name = process.argv[3];



if (command === "my-tweets") {
	myTweets();
};

if (command === "spotify-this-song") {
	spotify();
}

if (command === "movie-this") {
	movie();
}

if (command === "do-what-it-says") {
	doWhatItSays();
}	



function myTweets() {
	console.log("Last 20 tweets");

	var T = new Twitter("./keys.js");
	////////????????
	var params = {screen_name: ''};
	////////????????

	T.get('statuses/user_timeline', count=20, function(error, tweets, response) {
		if (!error) {
			for (i=0; i < 20; i++) {
				if (tweets[i] === "" && tweets[i] === null) {
					console.log("no text available");
				}
				else {
					//////////////???????
					console.log(tweets[i].text);
					//////////////???????
				}
			}
		}
	});

};

var song = "";

function spotify() {
	console.log("Spotify");
///////////
	song = process.argv.splice(3, process.argv.length - 1).join("+");
//////////
	var S = new Spotify("./spotify.js");

	console.log("song: " + song);

	S.search({
		type: 'track', 
		query: song
	}).then(function(response) {

		for (var i = 0; i < 20; i++) {
			console.log(i+1 + ". Artist: " + response.tracks.items[i].artists[0].name);
			console.log("Song Name: " + response.tracks.items[i].name);
			console.log("Preview: " + response.tracks.items[i].preview_url);
			console.log("Album: " + response.tracks.items[i].album.name);
		};
	});

};

function movie() {
	console.log("movie");

	var movie = "";
//////////
	if (process.argv[3] > "0") {
/////////	
		movie = process.argv.splice(3, process.argv.length - 1).join("+");
		//////////	
	}

	var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

/////////QUESTIONS/////////////////
	request(queryURL, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log(body);
			console.log("Title: " + JSON.parse(body).Title);
			console.log("Year: " + JSON.parse(body).Year);
			console.log("Rating: " + JSON.parse(body).imdbRating);
			//////What is parse?
			console.log("Country: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Plot);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
		}

	});

}

function doWhatItSays() {
	console.log("Do What It Says");

	var fs = require("fs");

	readFile();

	function readFile() {
		fs.readFile("random.txt", "utf8", function(error, data) {
			if (error) {
				console.log(error);
			} else {
				var dataArr = data.split(",");

				switch(dataArr[0]) {
					case "my-tweets":
						myTweets();

					case "spotify-this-song":
						song=dataArr[1];
						spotify();

					case "movie-this":
						movie=dataArr[1].replace(/ /g,"+");
						movie();
						console.log(movie);	
				}
			}
		});
	};

}




