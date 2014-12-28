"use strict";

var Desktop = {
    
    init: function(){
        // render iconbar
        var iconbar = document.getElementById("iconbar"),
        icon = document.createElement("img");
        
        icon.setAttribute('src', 'pics/image_icon.png');
        icon.setAttribute('alt', 'Icon in shape of a photographed mountain');
        icon.style.width = "64px";
        icon.style.height = "52px";
        //add icon to iconbar
        iconbar.appendChild(icon);
        
        var test = "Hejhopp";
        iconbar.appendChild(test);
        
    }
};

window.onload = Desktop.init;