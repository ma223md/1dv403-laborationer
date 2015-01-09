"use strict";

function ImageViewer(win, desktop){
    // get and render images
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){
    	if(xhr.readyState === 4 && xhr.status === 200){
    	    // remove loading icon at response
    	   var content = document.querySelector(".windowContent"),
    	   loadIcon = document.querySelector(".loadingIcon");
    	   content.removeChild(loadIcon);
    	    
            // parse object
            var obj = JSON.parse(xhr.responseText);
            
            //loop trough array
            for (var i = 0; i < obj.length; i++){
                // get elements
                //var content = document.querySelector(".windowContent");
                // create img and a elements
                var imageDiv = document.createElement("div"),
                link = document.createElement("a"),
                img = document.createElement("img");
                
                // set attributes
                link.setAttribute('href', '#');
                imageDiv.setAttribute('class', 'imageDiv');
                imageDiv.setAttribute('id', 'imageDiv'+i);
                img.setAttribute('src', obj[i].thumbURL);
                img.setAttribute('class', 'imageThumb');
                
                // append elements
                imageDiv.appendChild(img);
                link.appendChild(imageDiv);
                content.appendChild(link);
                
                // change background image on click
                img.onclick = (function(url){
                    return function() {
                        document.getElementById("desktop").style.backgroundImage = "url('" + url + "')";
                    };
                })(obj[i].URL);
            }
    	}
    };
    
	xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
    xhr.send(null);
}