"use strict";

window.onload = function(){
    // create new desktop
    var desktop = new Desktop;
    var nav = new Navigation(desktop);
    
    // add icons to navigation
    nav.newIcon('pics/image_icon.png', '64px', 'Gallery');
};