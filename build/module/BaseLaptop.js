"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Keyboard = __importStar(require("./Keyboard"));
var BaseLaptop = /** @class */ (function () {
    function BaseLaptop(name, type, numeric, touchButton) {
        this.name = name;
        this.type = type;
        this.withNumeric = numeric;
        this.withTouchButton = touchButton;
    }
    BaseLaptop.prototype.pressA = function () {
        console.log(Keyboard.pressA(this.name));
    };
    BaseLaptop.prototype.pressB = function () {
        console.log(Keyboard.pressB(this.name));
    };
    BaseLaptop.prototype.pressC = function () {
        console.log(Keyboard.pressC(this.name));
    };
    BaseLaptop.prototype.printInformation = function () {
        var information = "\n      <======== Informasi ========>\n      Nama Laptop         : " + this.name + "\n      Tipe Laptop         : " + this.type + "\n      Ada Tombol Numerik  : " + (this.withNumeric ? 'Ada' : 'Tidak') + "\n      Ada Tombol Touchpad : " + (this.withTouchButton ? 'Ada' : 'Tidak') + "\n      <============================>\n      ";
        console.log(information);
    };
    return BaseLaptop;
}());
exports.default = BaseLaptop;
