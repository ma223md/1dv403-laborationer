"use strict"

var Memory = {
    init: function(){
        // create a memory game, call function
        Memory.newGame();
    },
    
    // function for new game
    newGame: function(){
        // randomizedArray = randomized();
        var memorybricks = RandomGenerator.getPictureArray(4,4);
        
        // create new elements for game
        var div = document.getElementById("memoryboard"),
        text = document.createElement("p");
        
        text.innerHTML = Memory.memorybricks;
        div.appendChild(text);
    },
};

window.onload = Memory.init;  //init run when site is loaded