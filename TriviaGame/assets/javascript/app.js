
$(document).ready(function() {

  $('#quiz').hide();
  console.log("hi");
  $("#quizResults").hide();

})

$("#go").on('click', function() {
  $('#quiz').show();
  decrement();
})




var mins = 2;
var secs = mins * 60;
var currentSeconds = 0;
var currentMinutes = 0;

var numCorrect = 0;
var numIncorrect = 0;

var selectedAnswers = new Array();
var questionCount = $('#quiz .question').length;

var correctAnswers = [
  {Question: "question1",
  correctAnswer: 2,},
  {Question: "question2",
  correctAnswer: 3,},
  {Question: "question3",
  correctAnswer: 1,},
  {Question: "question4",
  correctAnswer: 2,},
  {Question: "question5",
  correctAnswer: 2,},
  {Question: "question6",
  correctAnswer: 3,},
  {Question: "question7",
  correctAnswer: 1,},
  {Question: "question8",
  correctAnswer: 2,},
  {Question: "question9",
  correctAnswer: 3,},
  {Question: "question10",
  correctAnswer: 2,}
]



function decrement() {
  currentMinutes = Math.floor(secs / 60);
  currentSeconds = secs % 60;
  if(currentSeconds <=9) currentSeconds = "0" + currentSeconds;
  secs--;
  document.getElementById("timer").innerHTML = currentMinutes+ ":" + currentSeconds;
  if(secs !== -1) { 
    setTimeout(decrement, 1000);
  } else {
    console.log('times up!')
    calculateScore();
  }
}

function timeUp() {
  console.log("done");
  $("display").html("<h2>Time's Up!</h2");
  $("#quiz").hide();
}


function getAnswers(){
   // var arr = [];
   $('input[type="radio"]:checked').each(function(){
      selectedAnswers.push({
        Question: $(this).attr("id"),
        Answer: $(this).val(), 
      });  
   });
   console.log(selectedAnswers);
   return selectedAnswers;
}

$("#submitQuiz").on("click", function() {  
  calculateScore();
  $("#display").hide();

})

function calculateScore() {
  getAnswers();
  showScore();
  $("#quiz").hide();
  $("#submitQuiz").hide();

  $("#go").hide();
}

function showScore() {
  $("#quizResults").show();
  $("#quizResults").html("<h1>" + "Correct: " + getCorrectAnswers() + "<br>" +  "Incorrect: " + numIncorrect.toString() + "</h1>");

  console.log(questionCount)

}

function getCorrectAnswers() {

  for (q = 0; q < questionCount; q++ ) {
    if (selectedAnswers[q] === undefined ) {
      numIncorrect++;
    }
    else if  
      (correctAnswers[q].correctAnswer.toString() === selectedAnswers[q].Answer) { 
      numCorrect++;
    }
    else {
      numIncorrect++;
    }
  }

  return numCorrect.toString();
}

