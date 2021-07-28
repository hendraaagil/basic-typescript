export class User {
  name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  }
}

// let user = new User('Hendra Agil', 17);
// console.log(user.name, `${user.age} y.o`);

// public = bisa diakses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut dan kelas turunannya
// private = hanya bisa di akses dari class itu sendiri

/**
User
  - Admin
  - Member
*/

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = '';
  static getRoleName: string = 'Admin';

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  static getNameRole() {
    return 'Hai';
  }

  getRole(): { read: boolean, write: boolean } {
    return {
      read: this.read,
      write: this.write
    }
  }

  set email(value: string) {
    if (value.length < 5) {
      this._email = 'Email kurang dari 5';
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}

// let admin = new Admin('08989898989', 'Hendra Agil Syaputra', 17);
// admin.getName();
// admin.getRole();
// console.log(admin);
// admin.setName('Agilllll');
// console.log(admin.getName());

// console.log("==========================");

// admin.email = 'hendraaagil@gmail.com';
// console.log(admin.email);


let admin = Admin.getRoleName;
let adminn = Admin.getNameRole();
console.log(adminn, ',', admin);