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

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean, write: boolean } {
    return {
      read: this.read,
      write: this.write
    }
  }
}

let admin = new Admin('08989898989', 'Hendra Agil Syaputra', 17);
console.log(admin.getName());
console.log(admin.getRole());
console.log(admin);
admin.setName('Agilllll');
console.log(admin.getName());