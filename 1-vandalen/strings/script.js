"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
    var convertString = function (str) {
        // ersätter A:n med #
        var replaceA = str.replace(/[Aa]/g, '#');
        var newStr = "";

        // loopa genom sträng, testa om det är stor eller liten bokstav och bygg ny sträng
        for (var i = 0; i < replaceA.length; i++) {
            var loopChar = replaceA[i];

            if (loopChar == loopChar.toUpperCase()) {
                loopChar = loopChar.toLowerCase();
                newStr = newStr + loopChar;
            }
            else if (loopChar == loopChar.toLowerCase()) {
                loopChar = loopChar.toUpperCase();
                newStr = newStr + loopChar;
            }
        }

        return newStr;

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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};