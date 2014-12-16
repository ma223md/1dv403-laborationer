"use strict";

// create quiz
function Quiz(){
    //define variables
    var qArray = [],
    qCounter = 0,
    aCounter = 0,
    form,
    questionText,
    inputArea,
    inputButton;
    
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
        qObject,
        answerMessage;
        
        // clean board
        var quizBoard = document.getElementById("quizarea");
        quizBoard.innerHTML = "";
        
        form = document.createElement("form"),
        questionText = document.createElement("p"),
        inputArea = document.createElement("textarea"),
        inputButton = document.createElement("input");
        answerMessage = document.createElement("p");
        
        
        // set ids
        form.setAttribute("id", "form");
        answerMessage.setAttribute("id", "answerparagraph")
        
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
        form.appendChild(answerMessage);
        
        xhr.onreadystatechange = function(){
        	if(xhr.readyState === 4 && xhr.status === 200){
        	    // get question and parse it
        	    qObject = JSON.parse(xhr.responseText);
                qArray.push(qObject);
                qCounter++;
                
                // print question
                questionText.innerHTML = "Question " + qCounter + ": " + qObject.question;
        	}
        };
        
    	xhr.open("GET", url, true);
        // skicka data med requesten, ange null om ingen data skall skickas
        xhr.send(null);
        
        // call answer function on click
        inputButton.onclick = function(){
            newAnswer(qObject.nextURL);
        };
    }
    
    // answer function goes here..
    function newAnswer(url){
        var xhrAnswer = new XMLHttpRequest(),
        aObject,
        answerMessage = document.getElementById("answerparagraph");
        
        // create new elements
        // answerMessage = document.createElement("p");
        // form.appendChild(answerMessage);
        
        xhrAnswer.onreadystatechange = function() {
            if(xhrAnswer.readyState === 4){
                // get answer and parse
                aObject = JSON.parse(xhrAnswer.responseText);
                
                // answerMessage.innerHTML = aObject.message;
                
                if (aObject.message === "Correct answer!"){
                    // render message
                    aCounter++;
                    answerMessage.innerHTML = aObject.message + " You made " + aCounter + " guesses!";
                    
                    //call function with next url
                    aCounter = 0;
                    
                    setTimeout(function() {
                        newQuestion(aObject.nextURL);
                    }, 2000);
                    
                }
                
                else {
                    // add to answer counter
                    aCounter++;
                    answerMessage.innerHTML = "Incorrect, try again!";
                }
            }
        };
        // create answer object
        var sendAnswer = JSON.stringify({"answer": inputArea.value});
        // send answer
        xhrAnswer.open("POST", url, true);
        xhrAnswer.setRequestHeader('Content-Type', 'application/json');
        xhrAnswer.send(sendAnswer);
    }
}


window.onload = function(){
        new Quiz();
    };





