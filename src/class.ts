export class User {
  public name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }
}

let user = new User('Hendra Agil', 17);
console.log(user.name, `${user.age} y.o`);