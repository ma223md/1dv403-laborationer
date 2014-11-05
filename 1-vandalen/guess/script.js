"use strict";

window.onload = function(){
	
    var secret = Math.floor((Math.random() * 100) + 1); // Slumpat tal
    var guesses = 0; // Antal gissningar
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
			
		guesses += 1 // Räknar antalet gissningar

	    // Om secret är samma som gissningen
		if (number > 100 || number < 1) {
		    return [false, "Talet är utanför intervallet 0 - 100"]
		}
	    // Om secret inte är ett tal
		if (isNaN(number) == true) {
		    return [false, "Du måste ange ett tal"]
		}
	    // Om gissningen är korrekt
		if (secret == number){
		    return [true, "Grattis du vann! Det hemliga talet var " + secret + " och du behövde "+ guesses + " gissningar för att hitta det."]
		}
		// Om gissning är högre än secretNumber
		else if (secret < number){
		    return [false, "Det hemliga talet är lägre!"]
		}
		// Om gissning är lägre än secretNumber
		else if (secret > number) {
		    return [false, "Det hemliga talet är högre!"]
		}
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};