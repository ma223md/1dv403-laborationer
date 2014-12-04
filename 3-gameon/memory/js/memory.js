"use strict"

var Memory = {
    // define variables
    memoryBricks: [],
    turnedBricks: [],
    lastBrick: undefined,
    
    init: function(){
        Memory.memoryBricks = RandomGenerator.getPictureArray(4,4);
        
        // Create memory bricks
        for (var i = 0; i < Memory.memoryBricks.length; i++){
            newBrick(i);
        }
        
        function newBrick(i){
             // create new link and image
            var div = document.getElementById("memoryboard");
            var link = document.createElement("a"),
            image = document.createElement("img");
            
            link.setAttribute("class", "memorybrick");
            link.setAttribute("href", "#");
            image.setAttribute('src', 'pics/0.png');
            image.setAttribute("id", i);
            
            div.appendChild(link);
            link.appendChild(image);
            
            // onclick function goes here
            link.onclick = function(){
                turnBrick(i);
                return false;
            };
        }
                    
        //function for turning bricks
        function turnBrick(brickID){
            // turn chosen brick, assign image
            var currentBrickImage = document.getElementById(brickID);
            var lastBrickImage = document.getElementById(brickID);
            currentBrickImage.setAttribute("src", "pics/" + Memory.memoryBricks[brickID] + ".png");
          
            if(lastBrick !== undefined) {
            	lastBrick = brickID;
            } else if (Memory.memoryBricks[lastBrick] === Memory.memoryBricks[brickID]) {
            	// MATCH, DO NOTHING?
                lastBrick = undefined;
            } else {
             	// NON MATCH
                /*
                currentBrickImage.setAttribute("src", "pics/0.png");
                lastBrickImage.setAttribute("src", "pics/0.png");
                */
                lastBrick = undefined;
            }
        }

    }
};

window.onload = Memory.init;  //init run when site is loaded