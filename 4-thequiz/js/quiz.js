"use strict";

        //var quiz = new Quiz(); // create quiz when site is loaded
        
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


// create quiz
function Quiz(){
    //define variables
    var qArray = [],
    qCounter = 0,
    aCounter = 0;
    
    // get quizboard
    var quizBoard = document.getElementById("quizarea"),
    // create start page elements
    startButton = document.createElement("input"),
    welcomeText = document.createElement("p");
    
    //set attributes for new elements
    startButton.setAttribute("type", "button");
    startButton.setAttribute("id", "startButton");
    startButton.setAttribute("value", "Start Quiz");
    
    // render new elements
    quizBoard.appendChild(welcomeText);
    quizBoard.appendChild(startButton);
    welcomeText.innerHTML = "Welcome! This quiz will test your mind to it's utmost limits!";
    
    // get first question
    startButton.onclick = function(){
        newQuestion("http://vhost3.lnu.se:20080/question/1");
    };
    
    // get question
    function newQuestion(url){
        //define variables
        var xhr = new XMLHttpRequest(),
        qObject;
        
        // clean board
        var quizBoard = document.getElementById("quizarea");
        quizBoard.innerHTML = "";
        
        var form = document.createElement("form"),
        questionText = document.createElement("p"),
        inputArea = document.createElement("textarea"),
        inputButton = document.createElement("input");
        
        // set id for form
        form.setAttribute("id", "form");
        
        // set attributes for textarea
        inputArea.setAttribute("cols", "15");
        inputArea.setAttribute("rows", "4");
        inputArea.setAttribute("placeholder", "Input answer here..");
        
        // set attributes for send button
        inputButton.setAttribute("type", "button");
        inputButton.setAttribute("value", "Answer");
        
        // append created elements
        quizBoard.appendChild(form);
        form.appendChild(questionText);
        form.appendChild(inputArea);
        form.appendChild(inputButton);
        
        xhr.onreadystatechange = function(){
        	if(xhr.readyState === 4 && xhr.status === 200){
        	    // get question and parse it
        	    qObject = JSON.parse(xhr.responseText);
                //qArray.push(qObject);
                qCounter++;
                
                // print question
                questionText.innerHTML = qObject.question;
        	}
        };
        
    	xhr.open("GET", url, true);
        // skicka data med requesten, ange null om ingen data skall skickas
        xhr.send(null);
        
        // call answer function on click
        inputButton.onclick = function(){
            // answerText = inputArea.value;
            newAnswer(qObject.nextURL);
        };
    }
    
    // answer function goes here..
    function newAnswer(url){
        var xhrAnswer = new XMLHttpRequest(),
        aObject,
        answerMessage,
        form = document.getElementById("form");
        
        // create new elements
        answerMessage = document.createElement("p");
        form.appendChild(answerMessage)
        
        xhrAnswer.onreadystatechange = function() {
            if(xhrAnswer.readyState === 4 && xhrAnswer.status === 200){
                // get answer and parse
                aObject = JSON.parse(xhrAnswer.responseText);
                
                // render message
                answerMessage.innerHTML = aObject.message;
            }
            
            //xhrAnswer.send(JSON.stringify(inputArea.value));
            
            xhrAnswer.open("POST", url, true);
            xhrAnswer.setRequestHeader('Content-Type', 'application/json')
            xhrAnswer.send(null);
        }
    }
}


window.onload = function(){
        new Quiz();
    }





