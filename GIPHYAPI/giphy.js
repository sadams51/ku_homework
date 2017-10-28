
$(document).ready(function() {
//load pre-loaded buttons 

//on click of any button - load the gifs 

//when topic is inserted into the form - 
//on click of the submit button - create a button named the value of the input 
//

var array = ["dog", "cat", "seal", "fox"];



//on click of submit button, push input to array 
//also call function that places all elements of array into buttons

//loop through array and create buttons for each element
  function createButtons() {
    $("#buttons").empty();


    for (var i = 0; i < array.length; i++) {
      var button = $("<button>");
      button.addClass("topic");
      button.addClass("btn btn-primary btn-md")
      button.attr("data-topic", array[i]);


      button.text(array[i]);

      $("#buttons").append(button);
    }
  }



//on click of submit button, push input to array 
//also call function that places all elements of array into buttons
  $("#submitButton").on("click", function(event) {
    event.preventDefault();

    var input = $("#input").val();

    array.push(input);

    createButtons();

  });  



//on click of a topic button, gifs will display 
  $(document).on("click", '.topic', function() {

    console.log("click");

  var topic = $(this).attr("data-topic"); 

    // Storing our giphy API URL for a random giphy image
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
    topic + "&api_key=dc6zaTOxFJmzC&limit=10";



    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    // After the data from the AJAX request comes back
    .done(function(response) {

      var results = response.data;

      for (var i = 0; i < results.length; i++) {

        var topicDiv = $("<div class='item'>");

      // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating)

      // Creating and storing an image tag
        var gif = $("<img>");

        // Setting the src attribute of the image to a property pulled off the result item
        gif.attr("src", results[i].images.fixed_height.url);

      // Setting the gif src attribute to imageUrl
        gif.attr("src", imageUrl);
        gif.attr("alt", topic);
        gif.attr("data-state", "animate");
        gif.addClass("gif");

        topicDiv.append(p);
        topicDiv.append(gif);

      // Prepending the catImage to the images div
      $("#images").prepend(topicDiv);
      }
    });

  });

  $(".gif").on("click", function() {
    var state = $(this).attr("data-state");

    if (state ==="still") {
      $(this).attr("src", $(this).attr("data-topic"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

createButtons();
})    