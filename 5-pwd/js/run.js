"use strict";

// var Desktop = {
    
//     init: function(){
//         // render iconbar
//         var iconbar = document.getElementById("iconbar"),
//         imageicon = document.createElement("img");
        
//         imageicon.setAttribute('src', 'pics/image_icon.png');
//         imageicon.setAttribute('alt', 'Icon in shape of a photographed mountain');
//         imageicon.style.width = "64px";
//         imageicon.style.height = "52px";
//         //add icon to iconbar
//         iconbar.appendChild(imageicon);
        
//         imageicon.onclick = function(){
//             // show images window
//         }
        
//     }
// };

window.onload = function(){
    // create new desktop
    var desktop = new Desktop;
    var nav = new Navigation;
    
    // add icons to navigation
    nav.newIcon('pics/image_icon.png', '64px');
};