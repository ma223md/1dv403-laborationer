"use strict";
window.onload = function(){
    function Messsage(message, date) {
    
        this.getText = function(){
            return message;
        }
        
        this.setText = function(_text) {
            message = text;
        }
        
        this.getDate = function(){
            return date;
        }
        
        this.setDate = function(_date) {
           date = _date 
        }
        
        Message.prototype.toString = function() {
            return this.getText() + " (" + this.getDate() + ")"
        }
        
        Message.prototype.getHTMLText = function() {
            return this.getText();
        }
        
        Message.prototype.getDateText = function() {
            return this.getDate().toLocalTimeString();
        }
    }
}