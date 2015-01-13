"use strict";

function ImageViewer(){
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
            //var boxSize = this.sizeHandler(obj);
            
            // arrays for storing height and width
            var sizesH = [],
            sizesW = [],
            hi,
            wi;
            
            for(var i = 0; i < obj.length; i++){
                // add sizes to arrays
                sizesH.push(obj[i].thumbHeight);
                sizesW.push(obj[i].thumbWidth);
                // sort array
                sizesH.sort();
                sizesW.sort();
                // calculate highest
                hi = sizesH[sizesH.length - 1];
                wi = sizesW[sizesW.length - 1];
            }
            
            //loop trough array
            for (var i = 0; i < obj.length; i++){
                // create img and a elements
                var imageDiv = document.createElement("div"),
                link = document.createElement("a"),
                img = document.createElement("img");
                
                // set attributes
                link.setAttribute('href', '#');
                imageDiv.setAttribute('class', 'imageDiv');
                imageDiv.setAttribute('id', 'imageDiv'+i);
                imageDiv.style.display = "block";
                // imageDiv.setAttribute("style","height:" + hi + "px");
                // imageDiv.setAttribute("style","width:" + wi + "px");
                imageDiv.style.height = hi + "px";
                imageDiv.style.width = wi + "px";
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

ImageViewer.prototype.sizeHandler = function(obj){
    // arrays for storing height and width
    var sizesH = [],
    sizesW = [],
    hi,
    wi;
    
    for(var i = 0; i < obj.length; i++){
        // add sizes to arrays
        sizesH.push(obj[i].thumbHeight);
        sizesW.push(obj[i].thumbWidth);
        // sort array
        sizesH.sort();
        sizesW.sort();
        // calculate highest
        hi = sizesH[sizesH.length - 1];
        wi = sizesW[sizesW.length - 1];
    }
    return [hi,wi];
};