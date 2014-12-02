"use strict"

var Memory = {
    // define variables
    memoryBricks: [],
    
    init: function(){
        // create a memory game, call function
        Memory.newGame();
    },
    
    // function for new game
    newGame: function(){
        Memory.memoryBricks = RandomGenerator.getPictureArray(4,4);
        // create new elements to test randomized array
        var div = document.getElementById("memoryboard");
        
        // create table for memoryboard
        // var memorytable = document.createElement("table")
        // div.appendChild(memorytable);
        

        // add each arrayitem to table
        for (var i = 0; i < Memory.memoryBricks.length; i++){
            // create new link and image
            var link = document.createElement("a"),
            image = document.createElement("img"),
            arrayTest = Memory.memoryBricks[i];
            
            link.setAttribute("class", "memorybrick");
            
            div.appendChild(link);
            link.appendChild(image);
            link.innerHTML = Memory.memoryBricks[i];
            // onclick funtion goes here
            //call function for creating brick
            //newBrick(i);
        }
                
        //function for creating bricks
        var newBrick = function(i){
            // create new link and image
            var link = document.createElement("a"),
            image = document.createElement("img"),
            arrayTest = Memory.memoryBricks[i];
            
            link.setAttribute("class", "memorybrick");
            
            div.appendChild(link);
            link.appendchild(arrayTest);
            // onclick funtion goes here
        }

    },
};

window.onload = Memory.init;  //init run when site is loaded