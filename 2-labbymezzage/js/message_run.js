 "use strict";

var MessageBoard = {
        // array för meddelanden
        messages: [],
        
        init: function(){
            var button = document.getElementById("button"),
            textArea = document.getElementById("messagetext");
            //mess = document.getElementById("messagetext");
            
            document.getElementById("counter").innerHTML = "0";
            
            button.onclick = MessageBoard.createMessage;
            
            /*button.onclick = function(){
                var mess = document.getElementById("messagetext").value;
                document.getElementById("messageboard").innerHTML = mess;
                return false;
            }; */

        // funktion för att skicka meddelande med enter, och ny rad för shift+enter
        textArea.onkeydown = function(e){
             if (e.keyCode === 13 && !e.shiftKey){
                     MessageBoard.createMessage();
                     return false;
                 }
            }
        },

    
    // skapa ett nytt meddelande
    createMessage: function(){
        var mess = document.getElementById("messagetext").value;
        var message = new Message(mess, new Date());
        
        // lägg till meddelande i array
        MessageBoard.messages.push(message);
        
        // rendera meddelanden
        MessageBoard.renderMessages();
        // document.getElementById("messageboard").innerHTML = MessageBoard.messages[0].getHTMLText();
        },
       
        
    // skriv ut meddelanden
    renderMessages: function() {
        // ta bort alla meddelanden
        document.getElementById("messageboard").innerHTML = "";
        
        //skriv ut alla meddelanden
        var counter = 0;
        for (var i = 0; i < MessageBoard.messages.length; i++) {
            // skriv ut varje meddelande
            MessageBoard.renderMessage(i);
            // lägg till på counter
            counter++;
            }
        // skriv ut antal meddelanden
        document.getElementById("counter").innerHTML = counter;
    },
        
    renderMessage: function(messageID) {
        // create div for new messages
        var div = document.getElementById("messageboard"), //select div where messages are posted
        messageDiv = document.createElement("div");
        div.appendChild(messageDiv);
        
        // create paragraph for date
        var date = document.createElement("time");
        date.innerHTML = MessageBoard.messages[messageID].getDateText();
        // date.className = "date"
        div.appendChild(date);
        
        // create clock icon
        var clock = document.createElement("img");
        clock.setAttribute('src', 'pics/clock_16.png');
        clock.setAttribute('alt', 'Icon in shape of a clock');
        clock.style.width = "16px";
        clock.style.height = "16px";
        //lägg till klockikon till tidsstämpel
        date.appendChild(clock);
        
        // create delete icon
        var deleteIcon = document.createElement("img");
        deleteIcon.setAttribute('src', 'pics/delete_16.png')
        deleteIcon.style.width = "16px";
        deleteIcon.style.height = "16px";
        date.appendChild(deleteIcon);
        
        // create paragraph for messagetext
        var text = document.createElement("p");
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        div.appendChild(text);
        

    },

};
    window.onload = MessageBoard.init;  //init körs när sidan laddats
        
    
