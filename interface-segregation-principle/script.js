//INTERFACE SEGREGATION PRINCIPLE
// A client should never be forced to implement an interface that it doesn’t use 
// Clients shouldn’t be forced to depend on methods they do not use.
var Parrot = /** @class */ (function () {
    function Parrot(name) {
        this.name = name;
    }
    Parrot.prototype.fly = function () {
        console.log("I can fly");
    };
    return Parrot;
}());
var Duck = /** @class */ (function () {
    function Duck(name) {
        this.name = name;
    }
    Duck.prototype.fly = function () {
        console.log("I can fly"); //Here we have an error
    };
    return Duck;
}());
var Dove = /** @class */ (function () {
    function Dove(name) {
        this.name = name;
    }
    Dove.prototype.fly = function () {
        console.log("I can fly");
    };
    return Dove;
}());
var Chicken = /** @class */ (function () {
    function Chicken(name) {
        this.name = name;
    }
    return Chicken;
}());
