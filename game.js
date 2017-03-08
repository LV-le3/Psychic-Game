var userguess =[];

	var letters = ["a", "b", "c", "d","e", "f", "g", "h","i", "j", "k" ,"l", "m", "n", "o" ,"p", "q" ,"r", "s" ,"t" ,"u", "v", "w", "x", "y", "z"];

	var wins= 0;
	var losses= 0;

	document.onkeyup = function() {
		var userguess = String.fromCharCode(event.keyCode). 
		toLowerCase();


	console.log(userguess);

	var computerguess = letters[Math.floor(Math.random()*letters.length)];


	console.log(computerguess);

	if ((userguess===computerguess)){
		wins++;
		alert("yay you win!!!!");

	}

	else{
		losses++;
		alert("booo it didn't match, try again!");
	}



	var html= "<p>wins: " + wins + "</p>" +
		"<p>losses: " + losses + "</p>";
		

document.querySelector('#game').innerHTML = html;
}