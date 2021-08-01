import ILaptop from './ILaptop';
import * as Keyboard from './Keyboard';

abstract class BaseLaptop<T> implements ILaptop<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;

  constructor(
    name: string,
    type: T,
    numeric: boolean,
    touchButton: boolean
  ) {
    this.name = name;
    this.type = type;
    this.withNumeric = numeric;
    this.withTouchButton = touchButton;
  }

  pressA(): void {
    console.log(Keyboard.pressA(this.name));
  }

  pressB(): void {
    console.log(Keyboard.pressB(this.name));
  }

  pressC(): void {
    console.log(Keyboard.pressC(this.name));
  }

  printInformation(): void {
    const information = `
      <======== Informasi ========>
      Nama Laptop         : ${this.name}
      Tipe Laptop         : ${this.type}
      Ada Tombol Numerik  : ${this.withNumeric ? 'Ada' : 'Tidak'}
      Ada Tombol Touchpad : ${this.withTouchButton ? 'Ada' : 'Tidak'}
      <============================>
      `;
    console.log(information);
  }
}

export default BaseLaptop;