
$(document).ready(function() {


	
 //initial variable values 
	var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

	var crystalOne = Math.floor(Math.random() * 12 + 1);

	var crystalTwo = Math.floor(Math.random() * 12 + 1);

	var crystalThree = Math.floor(Math.random() * 12 + 1);

	var crystalFour = Math.floor(Math.random() * 12 + 1); 

	var guess;

	var wins = 0; 

	var losses = 0;

	var totalScore = 0;

	$("#randomNumber").html("Random Number: " + randomNumber);
		console.log(randomNumber + "random Number");


	$("#crystalOne").click(function() {
		totalScore = totalScore + crystalOne;
		//$("#crystal1value").html(crystalOne);
		console.log(totalScore + "crystalclick1");
		$('#totalScore').html("Total Score: " + totalScore);
		checkStatus();
	});

	$("#crystalTwo").click(function() {
		totalScore = totalScore + crystalTwo;
		//$("#crystal2value").html(crystalTwo);
		console.log(totalScore + "crystalclick2");
		$('#totalScore').html("Total Score: " + totalScore);
		checkStatus();
	});

	$("#crystalThree").click(function() {
		totalScore = totalScore + crystalThree;
		//$("#crystal3value").html(crystalThree);
		console.log(totalScore + "crystalclick3");
		$('#totalScore').html("Total Score: " + totalScore);
		checkStatus();
	});

	$("#crystalFour").click(function() {
		totalScore = totalScore + crystalFour;
		//$("#crystal4value").html(crystalFour);
		console.log(totalScore + "crystalclick4");
		$('#totalScore').html("Total Score: " + totalScore);
		checkStatus();
	});


var checkStatus = function() {
	if (totalScore === randomNumber) {
		alert("You Win!");
		console.log("You Win");
		wins++;
		$("#wins").html("Wins: " + wins);
		reset();
	} else if (totalScore > randomNumber){
		alert("You Lose!");
		console.log("You Lose");
		losses++;
		$("#losses").html("Losses: " + losses);
		reset();
	}
}	

var reset = function() {
	
	totalScore = 0;

	randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

	crystalOne = Math.floor(Math.random() * 12 + 1);

	crystalTwo = Math.floor(Math.random() * 12 + 1);

	crystalThree = Math.floor(Math.random() * 12 + 1);

	crystalFour = Math.floor(Math.random() * 12 + 1); 


	$("#randomNumber").html("Random Number: " + randomNumber);
	console.log(randomNumber + "Reset random");

	$("#totalScore").html("Total Score: " + totalScore);
	console.log(totalScore + "total Score");

	if (totalScore === randomNumber) {
		alert("You Win!");
		console.log("You Win");
		wins++;
		$("#wins").html("Wins: " + wins);
		reset();
	} else if (totalScore > randomNumber){
		alert("You Lose!");
		console.log("You Lose");
		losses++;
		$("#losses").html("Losses: " + losses);
		reset();
	}	

};

});		

