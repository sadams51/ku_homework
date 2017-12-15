//array of words 
//pick random word
//convert that word to underlines 
//display letters as underlines 
//get input from user  
//compare the input to each letter in the word 
//if === to any letter in word, replace _ with the word
//then return the word - either with the replacement or without 
//

//Require npm inquirer, js files for word and letter constructors 
var inquirer = require('inquirer');

var wordObject = require('./word.js');

var letter = require('./letter.js');

//global variables 

var wordsArr = ['hangman', 'chewbacca', 'leia', 'yoda', 'jedi', 'sith', 'skywalker'];

var currentWord = new wordObject(wordsArr[Math.floor(Math.random() * wordsArr.length)]);

/////////////////////

console.log("Let's play hangman!");




function playGame() {

	console.log(currentWord.renderWord());
	console.log("");



//prompt user to guess a letter
	var prompt = (
		inquirer.prompt([{
			type: "input", 
			message: "Guess a letter",
			name:"userGuessLetter"
		}]).then(function(userResponse) {
			var userGuess = userResponse.userGuessLetter;
			currentWord.checkLetter(userGuess);

			//if word is completed - log response and reset
			if (currentWord.isWordCompleted()) {
				console.log("You Win! The word is " + currentWord.renderWord());
				reset();
				playAgain();
			//if no guesses left, then they lose 	
			} else if (currentWord.numGuesses === 0) {
				console.log("Sorry, you have no guesses remaining");
				console.log("------------------------------------");
				reset();
				playAgain();
			//if guesses left, then continue	
			} else {
				console.log("You have " + currentWord.numGuesses + " guesses left!");
				console.log("You have guessed " + currentWord.guesses);

				currentWord.numGuesses--;
				playGame();
			}
		})
	);
};

playGame();


function playAgain() {

	inquirer.prompt([{
		type: "list", 
		message: "Would you like to play again?",
		choices: ["Y", "N"],
		name: "playAgain"
	}]).then(function(info) {
		if (info.playAgain === "Y") {
			newGame();
		} else {
			console.log("------------------------------");
			console.log("Thanks for playing!");
		}
	})
};

function newGame() {
	if (currentWord.numGuesses > 0) {
		playGame();
	} else {
		console.log("Sorry, you have no guesses left");
		reset();
		newGame();
	}
};

function reset() {

	currentWord = new wordObject(wordsArr[Math.floor(Math.random() * wordsArr.length)]);

};
















