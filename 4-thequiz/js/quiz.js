"use strict";

window.onload = function(){
    var quiz = new Quiz();
};  // create quiz when site is loaded

function Quiz(){
    Quiz.xhr = new XMLHttpRequest();
    var div = document.getElementById("quizarea");
    
    // new question
    Quiz.question("http://vhost3.lnu.se:20080/question/1");
}

Quiz.question = function(q){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
    	if(xhr.readyState === 4){
    	    if (xhr.readyState == 200){
    	        console.log(xhr.responseText);
    	    }
    		else {
    		    console.log("Läsfel, status: "+xhr.status);
        	}
    	}
    	xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
        // skicka data med requesten, ange null om ingen data skall skickas
        xhr.send(null);
    };
}





