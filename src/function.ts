// Tipe data pada balikan (return) function

function getName(): string {
  return "Hello, my name is Hendra Agil";
}

function getAge(): number {
  return 17;
}

console.log(getName() + ', ' + getAge() + ' years old');

// Gunakan `void` jika function tidak me-return apapun
function printName(): void {
  console.log('Print Name!');
}

printName();

// Tipe data pada argumen atau parameter

function multiply(val1: number, val2: number): number {
  return val1 * val2;
}

const result = multiply(2, 88);
console.log(result);

// Function sebagai tipe data

type Age = number;
let age: Age = 17;

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
}

console.log(Add(23, 43));

// Default parameter / argumen
const fullName = (firstName: string, lastName: string = "Agil"): string => {
  return firstName + ' ' + lastName;
}

console.log(fullName('Hendra'));

// Optional parameter
// Jika tipe return adalah number, maka tidak bisa menggunakan optional parameter
// const getUmur = (val1: number, val2: number): number => {
const getUmur = (val1: number, val2?: number): string => {
  // return val1 + val2;
  return val1 + ' ' + val2;
}

// console.log(getUmur(17, 8)); // 25
console.log(getUmur(17)); // 17 undefined