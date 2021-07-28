"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.age = age;
        this.getName = function () {
            return _this.name;
        };
        this.name = name;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    return User;
}());
exports.User = User;
// let user = new User('Hendra Agil', 17);
// console.log(user.name, `${user.age} y.o`);
// public = bisa diakses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut dan kelas turunannya
// private = hanya bisa di akses dari class itu sendiri
/**
User
  - Admin
  - Member
*/
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = '';
        _this.phone = phone;
        return _this;
    }
    Admin.getNameRole = function () {
        return 'Hai';
    };
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            if (value.length < 5) {
                this._email = 'Email kurang dari 5';
            }
            else {
                this._email = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Admin.getRoleName = 'Admin';
    return Admin;
}(User));
// let admin = new Admin('08989898989', 'Hendra Agil Syaputra', 17);
// admin.getName();
// admin.getRole();
// console.log(admin);
// admin.setName('Agilllll');
// console.log(admin.getName());
// console.log("==========================");
// admin.email = 'hendraaagil@gmail.com';
// console.log(admin.email);
var admin = Admin.getRoleName;
var adminn = Admin.getNameRole();
console.log(adminn, ',', admin);
