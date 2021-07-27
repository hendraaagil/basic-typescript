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
