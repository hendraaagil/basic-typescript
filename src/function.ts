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