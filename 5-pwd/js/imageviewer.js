"use strict";

function ImageViewer(){
    // get and render images
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){
    	if(xhr.readyState === 4 && xhr.status === 200){
    	    // get picture object array
            // parse object
            var obj = JSON.parse(xhr.responseText);
            
            //loop trough array
            for (var i = 0; i < obj.length; i++){
                // create img and a elements
            }
    	}
    };
    
	xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
    // skicka data med requesten, ange null om ingen data skall skickas
    xhr.send(null);
}