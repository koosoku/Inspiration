var quotes = [
	"Always have faith. Always have hope.",
	"The key is to make it.","Another one.",
	"Key to more success is clean heart and clean face.",
	"You smart! You loyal! You’re a genius!",
	"We go hard. In everything we do we're going to accomplish our victory and our goal. If it takes a day, a year, or 20 years, we're going to win. I haven't taken a loss because everything I've done has been a working process to win. From being a kid on them turntables to becoming where I am is not a loss. It's a blessing."
	];
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