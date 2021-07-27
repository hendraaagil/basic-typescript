"use strict";
// Tipe data pada balikan (return) function
function getName() {
    return "Hello, my name is Hendra Agil";
}
function getAge() {
    return 17;
}
console.log(getName() + ', ' + getAge() + ' years old');
// Gunakan `void` jika function tidak me-return apapun
function printName() {
    console.log('Print Name!');
}
printName();
// Tipe data pada argumen atau parameter
function multiply(val1, val2) {
    return val1 * val2;
}
var result = multiply(2, 88);
console.log(result);
var age = 17;
var Add = function (val1, val2) {
    return val1 + val2;
};
console.log(Add(23, 43));
