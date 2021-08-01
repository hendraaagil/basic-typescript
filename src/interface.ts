// interface (blueprint), mirip dengan type
interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;

  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }

  on(): void {
    console.log('Laptop Asus Hidup');
  }
  off(): void {
    console.log('Laptop Asus Mati');
  }
}

class Macbook implements Laptop {
  name: string;
  keyboardLight: boolean;

  constructor(name: string, keyboardLight: boolean) {
    this.name = name;
    this.keyboardLight = keyboardLight;
  }

  on(): void {
    console.log('Laptop Macbook Hidup');
  }
  off(): void {
    console.log('Laptop Macbook Mati');
  }
}

const asus = new Asus('Asus A407UA', false);
console.log(asus);
console.log(asus.on());
console.log(asus.off());

const macbook = new Macbook('Mackbook Pro', true);
console.log(macbook);
console.log(macbook.on());
console.log(macbook.off());