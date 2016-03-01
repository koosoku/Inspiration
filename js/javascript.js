var quotes = [
	{quote:"Win win win no matter what", sound:"sounds/winWinWin.mp3"},
	{quote:"another one", sound:"sounds/anotherOne.mp3"},
	{quote:"I changed a lot, you can too", sound:"sounds/changedAlot.mp3"},
	{quote:"Them doors that were closed, I rip the doors off and took the hinges off. And when I took the hinges off, I put the hinges in the fuccboi's hands. Ya, in the fuccboi's hands, you know I took the whole door off and put the hinges in the fuccboi's hands. You can put the hinges on their hands too.", sound:"sounds/doorsHinges.mp3"},
	{quote:"Put this money in your savings account. Buy your mama a house, buy your whole family houses.", sound:"sounds/mamaHouse.mp3"},
	{quote:"You smart, You very smart. We the best. You a genius. I appreciate you. You loyal.", sound:"sounds/youSmart.mp3"}
	];
var currentQuote = 0;
$(function(){
	$("#inspirational-quote").text(quotes[currentQuote].quote);
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
		var audio = new Audio(quotes[currentQuote].sound);
		audio.play();

		$("#inspirational-quote").fadeOut(function(){
			$(this).text(quotes[currentQuote].quote);
			$(this).fadeIn();
		})

	
	});
});