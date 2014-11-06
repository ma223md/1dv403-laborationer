"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
    var convertString = function(str){
        // Plats för förändring.

        // Gör om sträng till array med bokstäver
        var stingArray = str.split("");

        function upperToLower(char) {
            return char.toLowerCase();
        }

        function lowerToUpper(char) {
            return char.toUpperCase();
        }

        for (var i = 0; i < stingArray.length; i++) {
            // if uppercase kalla på uppertoLower
            // else if lowercase kalla på lowertoUpper
            // if a or A kovertera till #

        }

        return str;


        //// Gå igenom array bokstav för bokstav
        //for (var i = 0; i < stingArray.length; i++){
        //        if (stringArray[i] != stringArray[i].toUpperCase()) {
        //                // Om bokstav är lowercase konvertera till uppercase
        //                stringArray[i] = stringArray[i].toUpperCase();
        //            }
        //        else {
        //                // Om bokstav är uppercase konvertera till lowercase
        //                stringArray[i] = stringArray[i].toLowerCase();
        //        }
        //        if (stringArray[i] == "a" || stringArray[i] == "A") {
        //            // Om bokstav är A eller a konvertera till #
        //            stringArray[i] = "#";
        //        }     
        //    }
        //// Sätt ihop array till sträng
        ////str = stingArray.join("");
        //// Returnera konverterad sträng
        //return str;

        // Vid fel, kasta ett undantag med ett meddelande till användaren.

        //var convertedString = '';
        //var convertedString = str.toUpperCase();

        //for (var i = 0; i < stingArray.length; i++) {
        //    if (stingArray.charCodeAt(i) >= 65 && stingArray.charCodeAt(i) <= 90) {
        //        convertedString = convertedString + stingArray.charAt(i).toLowerCase();
        //    }
        //    else
        //        convertedString = convertedString + stingArray.charAt(i).toUpperCase();
        //}

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