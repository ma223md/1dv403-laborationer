"use strict";

var makePerson = function(persArr){

    var result = {};
    // Lös uppgiften
    var nameArray = [];
    var ageArray = [];
    var nameString = "";
    var average= 0;

    // loopa igenom person-array
    for (var i = 0; i < persArr.length; i++) {
        // stoppa namn och ålder i varsin array
        //nameArray.push(persArr[i].name);
        //ageArray.push(persArr[i].age);
        nameArray[i] = persArr[i].name;
        ageArray[i] = persArr[i].age;
        average += persArr[i].age;
    }

    // sortera åldrar
    ageArray.sort(function (a, b) { return a - b });
    // räkna ut medelålder
    average = Math.round(average / persArr.length);
    // sortera å, ä, ö
    function localeSort(string1, string2) {
        return string1.toString().localeCompare(string2.toString());
    }
    // sortera namn
    nameArray.sort(localeSort);

    //sätt ihop till sträng
    for (i = 0; i < nameArray.length; i++) {
        nameString += nameArray[i];
        // lägg till "," till alla utom sista namnet
        nameString += (nameArray.length - 1 === i) ? "" : ", ";
    }

    // egenskaper för retur-objekt
    result.maxAge = ageArray[ageArray.length - 1];
    result.minAge = ageArray[0];
    result.averageAge = average;
    result.names = nameString;

    return result;
}

