 $(document).ready(function() {
	countryGuess();
});


function countryGuess() {
var countryArray = [ "Germany", "italy", "peru", "united kingdom", 
			"france", "russia", "brazil", "japan", 
			"china", "turkey", "bolivia", "argentina", "ecuador", 
			"canada", "indonesia", "mexico", "honduras", "spain", 
			"united states", "sweden", "australia", "angola", 
			"chile", "algeria", "norway", "iran", 
			"poland", "ukraine", "portugal", "ireland", 
			"morocco", "egypt"];
var index = Math.floor(Math.random()* countryArray.length);
var answer = countryArray[index];
var answerLower = countryArray[index].toLowerCase();
var answerUpper = countryArray[index].toUpperCase();
	console.log(answer);
	console.log(answerLower);
    console.log(answerUpper);
	$('#submit').click(function() {
		var guess = $('input').val();
		console.log(guess);
		if (guess == answer || guess == answerLower || guess == answerUpper) {
			$('h1').text(guess + ' is correct');
			$('input').val('');
			$('.button p').text('Play Again Lucky');
			$('#submit').click(function() {
				location.reload(true);
      
        });
       }
        else{
            $('h1').text(guess + ' is incorrect. Please Try Again!');
            $('input').val('');
        
        }
    });
}
		

