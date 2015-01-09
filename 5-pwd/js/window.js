"use strict";

function Window(desktop, icon, name){
    // get window elements
    var temp = document.querySelector(".template"),
    windowTemp = temp.content.querySelector(".window"),
    win = windowTemp.cloneNode(true);
    
    // assign elements for windowtop
    var windowTop = win.querySelector(".windowTop"),
    closeButton = win.querySelector(".closeIMG"),
    windowName = win.querySelector(".name"),
    content = win.querySelector(".windowContent");
    
    // define variables
    this.desktop = desktop;
    this.win = win;
    
    //append name
    windowName.innerHTML = name;
    
    //append new window
    desktop.element.appendChild(win);
    
    // check name
    this.checkName(name);
    
    // loading image
    var loadingIcon = document.createElement('img');
    loadingIcon.setAttribute('src', 'pics/loading_icon.GIF');
    loadingIcon.setAttribute('class', 'loadingIcon');
    content.appendChild(loadingIcon);
    
    // close window when button is clicked
    closeButton.onclick = function(e){
        desktop.element.removeChild(win);
    };
    
    
    // make dragable and movable
    var offset = { x: 0, y: 0 };
    windowTop.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
    
    function mouseUp() {
        win.removeEventListener('mousemove', popupMove, true);
    }
    
    function mouseDown(e) {
        offset.x = e.clientX - win.offsetLeft;
        offset.y = e.clientY - win.offsetTop;
        win.addEventListener('mousemove', popupMove, true);
    }
    
    function popupMove(e) {
        win.style.position = 'absolute';
        var top = e.clientY - offset.y;
        var left = e.clientX - offset.x;
        win.style.top = top + 'px';
        win.style.top = left + 'px';
    }
}

Window.prototype.checkName = function(name) {
    if (name === "Image Viewer"){
        // set top picture
        var windowicon = this.win.querySelector(".windowIcon");
        windowicon.setAttribute('src', 'pics/image_icon.png');
        
        // create image gallery
        new ImageViewer(Window.win, Window.desktop);
    }
};
