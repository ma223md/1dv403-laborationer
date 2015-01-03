"use strict";

function Window(desktop, icon, name){
    // get window elements
    var temp = document.querySelector(".template"),
    windowTemp = temp.content.querySelector(".window"),
    win = windowTemp.cloneNode(true);
    
    // assign elements for windowtop
    var windowTop = win.querySelector(".windowTop"),
    closeButton = win.querySelector("#closeIMG"),
    windowName = win.querySelector(".name");
    
    // define variables
    this.desktop = desktop;
    this.win = win;
    
    //append name
    windowName.innerHTML = name;
    
    //append new window
    desktop.element.appendChild(win);
    
    // close window when button is clicked
    closeButton.onclick = function(e){
        that.closeWindow();
    };
}

//function for closing window
Window.prototype.closeWindow = function() {
    this.desktop.element.removeChild(this.win);
};