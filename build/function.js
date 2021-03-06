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
// Default parameter / argumen
var fullName = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Agil"; }
    return firstName + ' ' + lastName;
};
console.log(fullName('Hendra'));
// Optional parameter
// Jika tipe return adalah number, maka tidak bisa menggunakan optional parameter
// const getUmur = (val1: number, val2: number): number => {
var getUmur = function (val1, val2) {
    // return val1 + val2;
    return val1 + ' ' + val2;
};
// console.log(getUmur(17, 8)); // 25
console.log(getUmur(17)); // 17 undefined
