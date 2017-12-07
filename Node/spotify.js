var Spotify = require('node-spotify-api');


var spotify = new Spotify({
	id: <be5d5246239f426d830eb5baabe07454>,
	secret: <5bdee7e337b64a3b9292cf883c4a36ec>
});

spotify.search({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, function(err, data) {
	if (err) {
		return console.log('Error ocurred: ' + err);
	}

console.log(data);	
});


