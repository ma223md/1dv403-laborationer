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
                // get elements
                var content = document.querySelector(".windowContent")
                // create img and a elements
                var imageDiv = document.createElement("div"),
                link = document.createElement("a"),
                img = document.createElement("img");
                
                // set attributes
                link.setAttribute('href', '#');
                imageDiv.setAttribute('class', 'imageDiv');
                img.setAttribute('src', obj[i].thumbURL);
                img.setAttribute('class', 'imageThumb');
                
                // append elements
                imageDiv.appendChild(img);
                link.appendChild(imageDiv);
                content.appendChild(link);
            }
    	}
    };
    
	xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
    xhr.send(null);
}