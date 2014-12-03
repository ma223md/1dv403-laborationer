"use strict"

var Memory = {
    // define variables
    memoryBricks: [],
    turnedBricks: [],
    
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
            image.setAttribute("id", Memory.memoryBricks[i]);
            
            div.appendChild(link);
            link.appendChild(image);
            
            // onclick funtion goes here
            link.onClick = function(){
                turnBrick(Memory.memoryBricks[i]);
                return false;
            };
        }
                    
        //function for turning bricks
        function turnBrick(id){
            Memory.turnedBricks.push(this);
            
            var brickImage = document.getElementById(Memory.MemoryBricks[id]);
            brickImage.setAttribute("src", "pics/" + Memory.MemoryBricks[id] + ".png");
        }

    }
};

window.onload = Memory.init;  //init run when site is loaded