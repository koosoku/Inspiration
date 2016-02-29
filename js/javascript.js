var quotes = ["Always have faith. Always have hope.","The key is to make it.","Another one.","Key to more success is clean heart and clean face."];
var currentQuote = 0;
$(function(){
	$("#inspirational-quote").text(quotes[currentQuote]);
});



$(function() {
	$("#more-inspiration-button").click(function(){
		console.log("clicked");
		var newQuote;
		do{
			newQuote = Math.floor(Math.random()*quotes.length);
		}while(currentQuote == newQuote)
		currentQuote = newQuote;
		$("#inspirational-quote").text(quotes[currentQuote]);
	
	});
});