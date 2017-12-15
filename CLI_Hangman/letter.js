
var Letter = function(letter) {

	this.letter = letter;
	this.guessed = false;

 
};

	//if letter guessed is correct...
Letter.prototype.renderLetter = function() {
	if (this.guessed) {
		return this.letter;
	} else {
		return " _";
	};
};


module.exports = Letter;