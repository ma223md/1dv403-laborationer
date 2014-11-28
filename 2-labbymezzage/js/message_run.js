 "use strict";

var MessageBoard = {
        // array for messages
        messages: [],
        
        init: function(){
            var button = document.getElementById("button"),
            textArea = document.getElementById("messagetext");
            // print current number of messages
            document.getElementById("counter").innerHTML = "0";
            // create message when button is clicked
            button.onclick = MessageBoard.createMessage;

        // function for sending with enter, and adding newline with enter+shift
            textArea.onkeydown = function(e){
                 if (e.keyCode === 13 && !e.shiftKey){
                         MessageBoard.createMessage();
                         return false;
                     }
                }
        },

    
    // function for creating new messages
    createMessage: function(){
        var mess = document.getElementById("messagetext").value;
        var message = new Message(mess, new Date());
        
        // add message to array
        MessageBoard.messages.push(message);
        
        // render messages
        MessageBoard.renderMessages();
        },
       
        
    // funtion for rendering messages
    renderMessages: function() {
        // delet all messages
        document.getElementById("messageboard").innerHTML = "";
        
        // render all messages
        var counter = 0;
        for (var i = 0; i < MessageBoard.messages.length; i++) {
            // render single message
            MessageBoard.renderMessage(i);
            // add to message counter
            counter++;
            }
        // render number of messages
        document.getElementById("counter").innerHTML = counter;
    },
        
    renderMessage: function(messageID) {
        // create div for new messages
        var div = document.getElementById("messageboard"), //select div where messages are posted
        messageDiv = document.createElement("div");
        div.appendChild(messageDiv);
        
        // create time tag for date
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
        //add clock icon to timestamp
        date.appendChild(clock);
        
        // create delete icon
        var deleteIcon = document.createElement("img");
        deleteIcon.setAttribute('src', 'pics/delete_16.png')
        deleteIcon.setAttribute('alt', 'Icon in shape of a trashcan');
        deleteIcon.style.width = "16px";
        deleteIcon.style.height = "16px";
        date.appendChild(deleteIcon);
        
        // create paragraph for messagetext
        var text = document.createElement("p");
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        div.appendChild(text);
        
        // call delete function when icon is clicked
        deleteIcon.onclick = function(){
            MessageBoard.deleteMessage(messageID);
        }
        
        // call time function when icon is clicked
        clock.onclick = function(){
            MessageBoard.dateTime(messageID);
        }
        
    },
    
    // function for deletng messages
    deleteMessage: function(messageID){
        var check = confirm("Are you sure you want to delete this message?");
        if (check === true){
            MessageBoard.messages.splice(messageID,1)
            MessageBoard.renderMessages();
        }
    },
    
    // function for showing time
    dateTime: function(messageID){
        alert("Message was created " + MessageBoard.messages[messageID].getDate().toDateString() + " at " + MessageBoard.messages[messageID].getDate().toLocaleTimeString());
    }

};
    window.onload = MessageBoard.init;  //init run when site is loaded
        
    
