var Message = (function () {
    function Message(str) {
        var div = document.createElement("message");
        document.body.appendChild(div);
        div.innerHTML = str;
    }
    return Message;
}());
var Main = (function () {
    function Main() {
        var mOne = new Message("Dit is een test");
        var mTwo = new Message("En het werkt!");
    }
    return Main;
}());
window.addEventListener("load", function () {
    new Main();
});
//# sourceMappingURL=main.js.map