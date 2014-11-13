"use strict";

window.onload = function(){

	
	var birthday = function(date){
			// Din kod här.
	    // kasta undantag om det inte går att tolka som ett datum YYYY-MM-DD
	    //var test = date.split("-");
	    var test = parseInt(date);
	    if (isNaN(test)) { 
	        throw new Error("Felaktigt datum angivet");
	    }

	    // variabler för att räkna ut tid
	    var minutes = 1000 * 60;
	    var hours = minutes * 60;
	    var days = hours * 24;

	    // objekt med dagens datum
	    var d = new Date();
	    var today = d.getTime();
	    // datumobjekt med date som värden
	    var bday = new Date(date);

	    // sätt födelsedagens år till i år
	    bday.setFullYear(d.getFullYear());
        // få millisekunder till födelsedagen
	    birthday = bday.getTime();
        
        // räkna ut hur lång tid till födelsedag och avrunda uppåt
	    var diff = birthday - today;
	    var timeTilBday = Math.ceil(diff / days);

	    // om man redan har fyllt år i år..
	    if (timeTilBday < 0) {
	        // räkna ut tid till nästa födelsedag
	        bday.setFullYear(d.getFullYear() + 1); // sätt födelsedag till nästa år
	        birthday = bday.getTime();
	        diff = birthday - today;
	        timeTilBday = Math.ceil(diff / days)

            return timeTilBday;
	    }
	        // om man inte redan fyllt år i år
	    else {
	        return timeTilBday;
	    }

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