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
    	   //win.removeChild(win.loadingIcon);
    	    
    	    // variables
    	    var imageDiv,
    	    link,
    	    img,
    	    images = [],
    	    URL = [];
    	    
            // parse object
            var obj = JSON.parse(xhr.responseText);
            
            //loop trough array
            for (var i = 0; i < obj.length; i++){
                // get elements
                //var content = document.querySelector(".windowContent");
                // create img and a elements
                imageDiv = document.createElement("div");
                link = document.createElement("a");
                img = document.createElement("img");
                
                // set attributes
                link.setAttribute('href', '#');
                imageDiv.setAttribute('class', 'imageDiv');
                imageDiv.setAttribute('id', 'imageDiv'+i);
                img.setAttribute('src', obj[i].thumbURL);
                img.setAttribute('class', 'imageThumb');
                
                // put url in array
                images.push(img);
                URL.push(obj[i].URL);
                
                // append elements
                imageDiv.appendChild(img);
                link.appendChild(imageDiv);
                content.appendChild(link);
                
                img.onclick = function(){
                    //change desktop background
                    //"url(" + obj[i].URL + ")";
                    document.getElementById("desktop").style.backgroundImage = "url('http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/pics/1050509.jpg')";
                };
            }
    	}
    };
    
	xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
    xhr.send(null);
}