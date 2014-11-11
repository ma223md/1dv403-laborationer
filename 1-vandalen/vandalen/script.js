"use strict";

var makePerson = function(persArr){

    // dela upp array till namn och åldrar
    for (var i = 0; i < persArr.length; i++) {
        // dela sträng till namn och ålder
        var split = persArr[i].split(" ")
        var name = split[1];
        var age = split[4];
        // stoppa namn och ålder i varsin array
        var nameArray = [name];
        var ageArray = [age];
    }
    // sortera åldrar
    ageArray.sort
    // sortera namn

}

