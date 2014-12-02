"use strict"

function Memory(newBoard){
    init: function(){
        // create a memory game, call function
        Memory.newGame();
    }
    
    // function for new game
    newGame: function(){
        var bricks = RandomGenerator.getPictureArray(5,5);
        
        // create new elements to test randomized array
        var div = document.getElementById("memoryboard"),
        text = document.createElement("p");
        
        text.innerHTML = Memory.memorybricks[1];
        div.appendChild(text);
        
        // create table for memoryboard
        var memorytable = document.createElement("table")
        div.appendChild(memorytable);
        

        // add each arrayitem to table
        for (var i = 0; i < memorybricks.length; i++){
            //call function for creating brick
            newBrick(i);
        }
                
        //function for creating bricks
        var newBrick = function(i){
            var brickgrid = document.createElement("td"),
            link = document.createElement("a"),
            picture = document.createElement("img");
            
            memorytable.appendChild(brickgrid);
            brickgrid.appendChild(link);
            brickgrid.appendChild(memorybricks[i])
            link.appendChild(picture);
            
            // onclick funtion goes here
        }

    }
};

window.onload = Memory.init;  //init run when site is loaded