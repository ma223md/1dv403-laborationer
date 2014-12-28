"use strict";

function Navigation(desktop){
    //get navigation elements
    
    this.desktop = desktop;
}

// function for new icons in navigation
Navigation.prototype.newIcon = function(imgURL){
    var icon = document.createElement("img");
    icon.setAttribute('src', imgURL);
    
    // append to element
    
    // onclick function
    icon.onclick = function(e){
        // create new window
    }
}

