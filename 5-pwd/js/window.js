"use strict";

function Window(desktop, icon){
    // get window elements
    
    // define variables
    this.desktop = desktop;
    
    // create elements
    var desk = document.getElementById("desktop");
    var div = document.createElement("div");
    div.className = "popupWindow";
    
    desk.appendChild(div);
    div.innerHTML = "Hejhej";
}