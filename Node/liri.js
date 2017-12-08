
var request = require("request");

var twitterKeys = require("./keys.js");

var Twitter = require("twitter");





var command = process.argv[2];

var name = process.argv[3];

var songName = process.argv.splice(3, process.argv.length - 1).join("+");



if (command === "my-tweets") {
	myTweets();
};

if (command === "spotify-this-song") {
	spotify(songName);
}

if (command === "movie-this") {
	movie();
}

if (command === "do-what-it-says") {
	doWhatItSays();
}	



function myTweets() {
	console.log("Last 20 tweets");



	var T = new Twitter(twitterKeys);

	var params = {screen_name: 'TheAwkBarista'};


	T.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			for (var i=0; i< tweets.length; i++) {
				console.log((i+1) + ": " + " " + tweets[i].text);
				console.log("Date: " + tweets[i].created_at);
				}
		}		
				else {
					console.log("error");
				}
	});

};




var songName = process.argv.splice(3, process.argv.length - 1).join("+");

function spotify(songName) {
	console.log("Spotify");
	var Spotify = require('node-spotify-api');


	var S = new Spotify({
	id: "be5d5246239f426d830eb5baabe07454",
	secret: "5bdee7e337b64a3b9292cf883c4a36ec"
	});

	console.log("song: " + songName);

	S.search({
		type: 'track', 
		query: songName
	}).then(function(response) {

		console.log("Anything");
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

	request(queryURL, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log(body);
			console.log("Title: " + JSON.parse(body).Title);
			console.log("Year: " + JSON.parse(body).Year);
			console.log("Rating: " + JSON.parse(body).imdbRating);
		
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
				var movieTitle;

				switch(dataArr[0]) {
					case "my-tweets":
						myTweets();
						break;

					case "spotify-this-song":
					console.log(dataArr[1].replace(/ /g,"+"));
						songName=(dataArr[1].replace(/ /g,"+"));
						
						spotify(songName);
						break;

					case "movie-this":
						movieTitle=dataArr[1].replace(/ /g,"+");
						movie();
						console.log(movieTitle);
						break;

					default:
						console.log("Cannot recognize text") 
				}
			}
		});
	};

}




