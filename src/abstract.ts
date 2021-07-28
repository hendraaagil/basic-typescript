abstract class Vehicle {
  abstract wheels: number;

  start(): void {
    console.log('ngenggg!!!');
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

class Bike extends Vehicle {
  wheels: number = 2;
}

let car = new Car()
console.log(car);
car.start()

console.log('======================');

let bike = new Bike();
console.log(bike);
bike.start()