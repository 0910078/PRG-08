/// <reference path="message.ts"/>

class Main {
    constructor() {
       let mOne:Message = new Message("Dit is een test");
       let mTwo:Message = new Message("En het werkt!");
    }
} 

// hier starten we de applicatie
window.addEventListener("load", function() {
    new Main();
});