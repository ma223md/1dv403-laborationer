"use strict";

window.onload = function(){
    document.getElementById("startButton").addEventListener("click", function(){
        
        var quiz = new Quiz(); // create quiz when site is loaded
        
        // var xhr = new XMLHttpRequest();
        
        // // testa att get fungerar
        // xhr.onreadystatechange = function(){
        // 	if(xhr.readyState === 4 && xhr.status === 200){
        // 	    var q = JSON.parse(xhr.responseText);
        //         console.log(q);
        // 	}
        // };
        // 	xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
        //     // skicka data med requesten, ange null om ingen data skall skickas
        //     xhr.send(null);
        
        // // testa att post fungerar
        // xhr.onreadystatechange = function(){
        // 	if(xhr.readyState === 4 && xhr.status === 200){
        // 	    var a = JSON.parse(xhr.responseText);
        //         console.log(a);
        // 	}
        // };
        // 	xhr.open("POST", "http://vhost3.lnu.se:20080/answer/1", true);
        //     xhr.setRequestHeader('Content-Type', 'application/json');
            
        //     var answer = {
        //         "answer": "2"
        //     }
            
        //     xhr.send(JSON.stringify(answer));
            
            
        // // testa nästa adress
        // xhr.onreadystatechange = function(){
        // 	if(xhr.readyState === 4 && xhr.status === 200){
        // 	    var next = JSON.parse(xhr.responseText);
        //         console.log(next);
        // 	}
        // };
        
        // xhr.open("GET", "http://vhost3.lnu.se:20080/question/321")
        // xhr.send(null);
        
        
    });
};


// create quiz
function Quiz(){
    
    // create elements for quizboard
    var quizBoard = document.getElementById("quizarea"),
    form = document.createElement("form"),
    question = document.createElement("p"),
    inputArea = document.createElement("textarea"),
    inputButton = document.createElement("input")
    
    
    // new question
    this.xhr = new XMLHttpRequest();
    Quiz.question("http://vhost3.lnu.se:20080/answer/1");
};

Quiz.question = function(question){
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){
    	if(xhr.readyState === 4 && xhr.status === 200){
    	    // var q = JSON.parse(xhr.responseText);
            console.log(xhr.responseText);
    	};
    	
    	xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
        // skicka data med requesten, ange null om ingen data skall skickas
        xhr.send(null);
    };
};





