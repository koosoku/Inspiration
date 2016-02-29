var quotes = ["Always have faith. Always have hope.","The key is to make it.","Another one.","Key to more success is clean heart and clean face."];
var currentQuote = 0;
$(function(){
	$("#inspirational-quote").text(quotes[currentQuote]);
});

window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "You've played yourself";
  (e || window.event).returnValue = confirmationMessage; //Gecko + IE
  return confirmationMessage;                            //Webkit, Safari, Chrome
});



$(function() {
	$("#more-inspiration-button").click(function(){
		console.log("clicked");
		var newQuote;
		do{
			newQuote = Math.floor(Math.random()*quotes.length);
		}while(currentQuote == newQuote)
		currentQuote = newQuote;

		$("#inspirational-quote").fadeOut(function(){
			$(this).text(quotes[currentQuote]);
			$(this).fadeIn();
		})

	
	});
});