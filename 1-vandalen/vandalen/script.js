"use strict";

var makePerson = function(persArr){

    var result = {};
    // Lös uppgiften
    var nameArray = [];
    var ageArray = [];
    var nameString = "";

    // loopa igenom person-array
    for (var i = 0; i < persArr.length; i++) {
        // stoppa namn och ålder i varsin array
        //nameArray.push(persArr[i].name);
        //ageArray.push(persArr[i].age);
        nameArray[i] = persArr[i].name;
        ageArray[i] = persArr[i].born;
    }

    // sortera åldrar
    ageArray.sort(function (a, b) { return a - b });

    // sortera namn
    nameArray.sort();

    //sätt ihop till sträng
    
    for (i = 0; i < nameArray.length; i++) {
        nameString += nameArray[i];
        // lägg till "," till alla utom sista namnet
        nameString += (nameArray.length - 1 === i) ? "" : ", ";
    }

    // egenskaper för retur-objekt
    result.maxAge = ageArray[ageArray.length];
    result.minAge = ageArray[0];
    result.averageAge = 13;
    result.names = nameString;

    return result;
    //var data = [{ name: "John Häggerud", age: 37 }, { name: "Johan Leitet", age: 36 }, { name: "Mats Loock", age: 46 }];
}

