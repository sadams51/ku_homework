var Twitter = require('twitter');

var client = new Twitter({
	consumer_key: '',
	consumer_secret: '', 
	access_token_key: '',
	access_token_secret: ''
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
	if (!error) {
		console.log(tweets);
	}
});

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
	id: <your spotify client id>,
	secret: <your spotify client secret>
});

spotify.search({ type: 'track', query: 'All the Small Things'}, function(err, data) {
	if (err) {
		return console.log('Error ocurred: ' + err);
	}

console.log(data);	
});

var request = require('request');
request('http://www.omdb.com', function (error, response, body) {
	console.log('error:', error);
	console.log('statusCode:', response && response.statusCode);
	console.log('body:', body);
});