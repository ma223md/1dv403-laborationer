"use strict";

var Memory = {
    // define variables
  	memoryBricks: [],
    pairedBricks: new Array(),
    lastBrick: undefined,
    isTurning: false,
    counter: 0,
    
    init: function(){
        Memory.memoryBricks = RandomGenerator.getPictureArray(4,4);
        
        // Create memory bricks
        for (var i = 0; i < Memory.memoryBricks.length; i++){
            newBrick(i);
        }
        
        function newBrick(i){
             // create new link and image
            var div = document.getElementById("memoryboard"),
            link = document.createElement("a"),
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
      
        function contains(a, obj) {
            for (var i = 0; i < a.length; i++) {
                if (a[i] === obj) {
                    return true;
                }
            }
            return false;
        }
                    
        //function for turning bricks
        function turnBrick(brickID){
            if(contains(Memory.pairedBricks, brickID) || Memory.isTurning === true) {
            	return;
            }
          
            // turn chosen brick, assign image
            var currentBrickImage = document.getElementById(brickID);
            var lastBrickImage = document.getElementById(Memory.lastBrick);
            currentBrickImage.setAttribute("src", "pics/" + Memory.memoryBricks[brickID] + ".png");

            if(Memory.lastBrick === undefined) {
            	Memory.lastBrick = brickID;
            	//add last brick to array
            } else if (Memory.memoryBricks[Memory.lastBrick] === Memory.memoryBricks[brickID]) {
            	// matched a pair
                Memory.lastBrick = undefined;
                // add pair to array
                Memory.pairedBricks.push(brickID);
                Memory.pairedBricks.push(Memory.lastBrick);
                Memory.counter++;
                
            } else {
             	// doesn't match, turn back bricks
              	Memory.isTurning = true;
                setTimeout(function(){
                  	Memory.isTurning = false;
                    currentBrickImage.setAttribute("src", "pics/0.png");
                    lastBrickImage.setAttribute("src", "pics/0.png");
                }, 1000);
                
                Memory.lastBrick = undefined;
                Memory.counter++;
            }
            
            if (Memory.pairedBricks.length === 16){
                alert("Congratulations! You won with " + Memory.counter + " guesses!");
            }
        }

    }
};

window.onload = Memory.init;  //init run when site is loaded