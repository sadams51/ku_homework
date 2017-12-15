//require letter.js file 
var Letter = require('./letter.js');

var wordObject = function(letters) {
	this.numGuesses = 15;
	//array to hold letters user has guessed
	this.guesses = [];
	//array to hold letters of the random word
	this.lettersArr = [];

	this.getLetters = function() {
		//loop through letters in chosen word

		for (var i = 0; i < letters.length; i++) {
			var specificLetter = new Letter(letters[i]);
			this.lettersArr.push(specificLetter);
		}
	};
	this.getLetters();
};

//checks if letter guess is correct 
wordObject.prototype.checkLetter = function(param) {
	this.notCorrect = true;
	this.valid = false;

	var param = param.toLowerCase();

	//letter selected is correct
	if (this.guesses.indexOf(param) != -1) {
		this.valid = true;
		//letter selected is incorrect
	} else { 
		//push letter to guesses array 

		this.guesses.push(param);

		for (var i = 0; i < this.lettersArr.length; i++) {
			if (this.lettersArr[i].letter == param) {
				this.notCorrect = false;
				this.lettersArr[i].guessed = true
			}
		}
		if (this.notCorrect) {
			this.guessesRemaining--;
		}

	}
};

//show word

wordObject.prototype.renderWord = function() {
	var display = "";
	for (var i = 0; i < this.lettersArr.length; i++) {
		display += this.lettersArr[i].renderLetter();
	}
	return display;
};

//has word been completely guessed
wordObject.prototype.isWordCompleted = function() {
	for (var i = 0; i < this.lettersArr.length; i++) {
		if (this.lettersArr[i].guessed === false) {
			return false;
		}
	}
	return true;
};




module.exports = wordObject;

