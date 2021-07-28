"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age) {
        this.age = age;
        this.name = name;
    }
    return User;
}());
exports.User = User;
var user = new User('Hendra Agil', 17);
console.log(user.name, user.age + " y.o");
