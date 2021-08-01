"use strict";
var List = /** @class */ (function () {
    // constructor(elements: T[]) {
    function List() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.data = elements;
    }
    List.prototype.add = function (element) {
        this.data.push(element);
    };
    // addMultiple(elements: T[]): void {
    List.prototype.addMultiple = function () {
        var _a;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, elements);
    };
    List.prototype.getAll = function () {
        return this.data;
    };
    return List;
}());
// const numbers = new List<number>([1, 2, 3]);
var numbers = new List(1, 2, 3);
numbers.add(4);
// numbers.addMultiple([5, 6, 7, 8, 9, 10])
numbers.addMultiple(5, 6, 7, 8, 9, 10);
console.log(numbers.getAll());
var random = new List(1, 'Dua', 'Tiga');
random.add(4);
random.addMultiple('Lima', 6, 7, 8, 9, 'Sepuluh');
console.log(random.getAll());
