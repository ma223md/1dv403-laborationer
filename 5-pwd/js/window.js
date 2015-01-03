"use strict";

function Window(desktop, icon){
    // get window elements
    var temp = document.querySelector(".template"),
    windowTemp = temp.content.querySelector(".window"),
    win = windowTemp.cloneNode(true);
    
    // define variables
    this.desktop = desktop;
    this.win = win;
    
    //append new window
    desktop.element.appendChild(win);
    
}