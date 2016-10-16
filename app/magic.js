var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = 'Whats up'; }
        return "Hello " + message;
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething('Ramesh');
//# sourceMappingURL=magic.js.map