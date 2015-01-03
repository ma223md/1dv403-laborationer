"use strict";

function Window(desktop, icon){
    // get window elements
    var temp = document.querySelector(".template"),
    windowTemp = temp.content.querySelector(".window"),
    win = windowTemp.cloneNode(true);
    
    // define variables
    this.desktop = desktop;
    this.win = win;
    
    // create elements
    // var desk = document.getElementById("desktop");
    // var div = document.createElement("div");
    // div.className = "popupWindow";
    
    // desk.appendChild(div);
    // div.innerHTML = "Hejhej";
    
    //var windowTop = win.querySelector(".windowTop");
    
    //append new window
    desktop.element.appendChild(win);
    
}