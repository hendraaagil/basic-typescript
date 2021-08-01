"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Asus.prototype.on = function () {
        console.log('Laptop Asus Hidup');
    };
    Asus.prototype.off = function () {
        console.log('Laptop Asus Mati');
    };
    return Asus;
}());
var Macbook = /** @class */ (function () {
    function Macbook(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    Macbook.prototype.on = function () {
        console.log('Laptop Macbook Hidup');
    };
    Macbook.prototype.off = function () {
        console.log('Laptop Macbook Mati');
    };
    return Macbook;
}());
var asus = new Asus('Asus A407UA', false);
console.log(asus);
console.log(asus.on());
console.log(asus.off());
var macbook = new Macbook('Mackbook Pro', true);
console.log(macbook);
console.log(macbook.on());
console.log(macbook.off());
