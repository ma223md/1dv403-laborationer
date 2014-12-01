"use strict"

var Memory = {
    init: function(){
        // create a memory game, call function
        Memory.newGame();
    }
    
    // function for creating randomized array
    randomized = function(){
        var memorybricks = RandomGenerator.getPictureArray(4,4);
    }
    
    // function for new game
    newGame = function(){
        randomizedArray = randomized();
        
        // create new elements for game
    };
}

window.onload = Memory.init;  //init run when site is loaded