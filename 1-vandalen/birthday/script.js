"use strict";

window.onload = function(){

	
	var birthday = function(date){
			// Din kod här.
	    // kasta undantag om det inte går att tolka som ett datum YYYY-MM-DD

	    // objekt med dagens datum
	    var d = new Date();
	    var today = d.getTime();
	    // datumobjekt med date som värden
	    var bday = new Date(date);

        // ger personens ålder
	    //var diff = bday - today;

	    // sätt födelsedagens år till i år
	    var year = today.getYear();
	    bday.setFullYear(year);

	    birthday = bday.getTime();
        
	    var diff = birthday - today;

        // variabler för att räkna ut tid
	    var minutes = 1000 * 60;
	    var hours = minutes * 60;
	    var days = hours * 24; 
	    var years = days * 365;

	    var timeTilBday = Math.round(diff / days);

        // returnera tid kvar
	    return timeTilBday;


	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};