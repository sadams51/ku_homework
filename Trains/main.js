  var config = {
    apiKey: "AIzaSyDh0jy24UuK67YhsF_8r7NlDm5g2UFAPfw",
    authDomain: "train-timetables.firebaseapp.com",
    databaseURL: "https://train-timetables.firebaseio.com",
    projectId: "train-timetables",
    storageBucket: "",
    messagingSenderId: "593404638306"
  };
  firebase.initializeApp(config);

 var database = firebase.database();
 //console.log(firebase);

  //?
  var trainCount = 0;

  var currentTime = moment();


console.log (moment().format('HH:mm a'));


function calculateMinutesAway (trainTime) {
  var currentTime = moment();
  var trainArrivalTime = moment(trainTime, "HH:mm");
  return trainArrivalTime.diff(currentTime, "minutes");

}


//on the update of a value in the database 'trains' section, grab that info 
database.ref().on("child_added", function(snapshot) {
  

    train = snapshot.val();
    console.log(train);
    console.log(train.name);

  trainCount = train.length;
  console.log(trainCount);


//not sure what this does 
  showTrains(train);
    console.log(trainCount);
}, function(t) {
    console.log(t);    
});


//on page ready... 
$(document).ready(function() {

//Add new trains

  $(".submit").on("click", function(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Get the input values
//create variables from the values submitted in the form 
    var trainName = $("#train-name").val().trim();
    var destination = $("#train-destination").val().trim();
    var frequency = $("#frequency").val().trim();
    var time = $("#next-arrival").val().trim();




//log those values 
    console.log("train: "+trainName);
    console.log("destination: "+destination);
    console.log("frequency: "+ frequency);
    console.log("next arrival: "+ time);

//call function to add train information to database
    addTrain(trainName, destination, frequency, time);

//clearing the form 
    $("#train-name").val('');
    $("#train-destination").val('');
    $("#frequency").val('');
    $("#arrival-time").val('');   	
   });
});
//creating function that adds the train information to the database
 
function addTrain(name, destination, frequency, time) {
  var newTrain = {
    name: name,
    destination: destination,
    frequency: frequency, 
    time: time
 
  }

  database.ref().push(newTrain);

};
//function that will show the trains in the table 
function showTrains(train) {

    var name = train.name;
    var destination = train.destination;
    var time = train.time;
    var frequency = train.frequency;
    var minutesAway = calculateMinutesAway(train.time);

    var newRow = $("<tr>");
    var newName = $("<td>").text(name);
    var newDestination = $("<td>").text(destination);
    var newFrequency = $("<td>").text(frequency);
    var newTime = $("<td>").text(time);
    var newMinutesAway = $("<td>").text(minutesAway);



    newRow.append(newName);
    newRow.append(newDestination);
    newRow.append(newFrequency);
    newRow.append(newTime);
    newRow.append(newMinutesAway);


    // function calculateNextArrivalTime(frequency) {
      //  var trainfrequency = moment(frequency, "HH:mm");
      //  var nextArrivalTime = (trainArrivalTime + frequency);
      //  var trainArrivalTime = moment(trainTime, "HH:mm");
      //  if (trainArrivalTime < currentTime) {
      //     replace newTime...    
      //  }
  
    // }



    $(".table").append(newRow);
  
};
