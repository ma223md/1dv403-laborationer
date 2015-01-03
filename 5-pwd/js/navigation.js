"use strict";

function Navigation(desktop){
    //get navigation elements
    this.element = document.getElementById("iconbar")
    this.desktop = desktop;
}

// function for new icons in navigation
Navigation.prototype.newIcon = function(imgURL, width, name){
    var icon = document.createElement("img");
    
    //set attributes
    icon.setAttribute('src', imgURL);
    icon.style.width = width;
    icon.style.height = "54px";
    
    var that = this;
    // append to element
    this.element.appendChild(icon);
    
    // onclick function
    icon.onclick = function(e){
        // create new window
        //e.preventDefault();
        new Window(that.desktop, icon);
        return false;
    };
};

