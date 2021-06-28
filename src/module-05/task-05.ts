interface ICarInitial {
  price: number;
  maxSpeed: number;
}
interface ICar extends ICarInitial {
  speed: number;
  isOn: boolean;
  distance: number;
}

class Car implements ICar {
  maxSpeed: any;
  speed: number;
  isOn: boolean;
  distance: number;
  _price: number;

  constructor({ price, maxSpeed }: ICarInitial) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  static getSpecs(car: ICar) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.speed = 0;
    this.isOn = false;
  }

  accelerate(value: number) {
    if (this.isOn && value > 0) {
      this.speed + value <= this.maxSpeed
        ? (this.speed += value)
        : (this.speed = this.maxSpeed);
    }
  }

  decelerate(value: number) {
    if (value > 0) {
      this.speed - value >= 0 ? (this.speed -= value) : (this.speed = 0);
    }
  }

  drive(hours: number) {
    this.distance += hours * this.speed;
  }

  get price() {
    return this._price;
  }

  set price(val: number) {
    this._price = val;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

export {};
