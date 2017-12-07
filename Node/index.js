// var Twitter = require('twitter');

// var client = new Twitter({
// 	consumer_key: '',
// 	consumer_secret: '', 
// 	access_token_key: '',
// 	access_token_secret: ''
// });

// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
// 	if (!error) {
// 		console.log(tweets);
// 	}
// });

// var Spotify = require('node-spotify-api');

// var spotify = new Spotify({
// 	id: <your spotify client id>,
// 	secret: <your spotify client secret>
// });

// spotify.search({ type: 'track', query: 'All the Small Things'}, function(err, data) {
// 	if (err) {
// 		return console.log('Error ocurred: ' + err);
// 	}

// console.log(data);	
// });

// var request = require('request');
// var nodeArgs = process.argv;
// var movieName = "";

// for (var i=2; i < nodeArgs.length; i++) {
// 	if (i > 2 && i < nodeArgs.length) {
// 		movieName = movieName + "+" + nodeArgs[i];
// 	}
// 	else { 
// 		movieName += nodeArgs[i];
// 	}
// }
// //run request to OMDB API with movie specified 
// var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

// request(queryURL, function (error, response, body) {
// 	if (!error && response.statusCode === 200) {
// 		console.log('Movie Title: ', JSON.parse(body).Title);
// 	}	
// });