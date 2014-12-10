"use strict";

window.onload = function(){
    document.getElementById("button").addEventListener("click", function(){
        
        var xhr = new XMLHttpRequest();
        
        // testa att get fungerar
        xhr.onreadystatechange = function(){
        	if(xhr.readyState === 4 && xhr.status === 200){
        	    var q = JSON.parse(xhr.responseText);
                console.log(q);
        	}
        };
        	xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
            // skicka data med requesten, ange null om ingen data skall skickas
            xhr.send(null);
        
        // testa att post fungerar
        xhr.onreadystatechange = function(){
        	if(xhr.readyState === 4 && xhr.status === 200){
        	    var a = JSON.parse(xhr.responseText);
                console.log(a);
        	}
        };
        	xhr.open("POST", "http://vhost3.lnu.se:20080/answer/1", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            
            var answer = {
                "answer": "2"
            }
            
            xhr.send(JSON.stringify(answer));
            
            
        // testa nästa adress
        xhr.onreadystatechange = function(){
        	if(xhr.readyState === 4 && xhr.status === 200){
        	    var next = JSON.parse(xhr.responseText);
                console.log(next);
        	}
        };
        
        xhr.open("GET", "http://vhost3.lnu.se:20080/question/321")
        xhr.send(null);
        
        
        // var quiz = new Quiz(); // create quiz when site is loaded
    });
};



// function Quiz(){
//     // this.xhr = new XMLHttpRequest();
    
//     var div = document.getElementById("quizarea");
    
//     // new question
//     Quiz.question("http://vhost3.lnu.se:20080/answer/1");
// };

// Quiz.question = function(question){
//     var xhr = new XMLHttpRequest();
    
//     xhr.onreadystatechange = function(){
//     	if(xhr.readyState === 4 && xhr.status === 200){
//     	    // var q = JSON.parse(xhr.responseText);
//             console.log(xhr.responseText);
//     	};
    	
//     	xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
//         // skicka data med requesten, ange null om ingen data skall skickas
//         xhr.send(null);
//     };
// };





