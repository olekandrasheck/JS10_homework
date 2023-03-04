//Unique values
const anagrams = [
  "actor",
  "carot",
  "listen",
  "enlist",
  "debit",
  "bided",
  "tear",
  "rate",
  "night",
  "thing",
  "lives",
  "veils",
  "stressed",
  "desserts",
  "dormitory",
  "dirty room",
  "rescue",
  "secure",
  "a gentleman",
  "elegant man",
  "listen",
  "heart",
  "angel",
  "leader",
  "silent",
];
function unique(anagrams) {
  let unique = new Set();

  return anagrams.filter((word) => {
    let filtered = word.toLowerCase().split("").sort().join("");
    if (!unique.has(filtered)) {
      unique.add(filtered);
      return true;
    }
  });
}

unique([
  "actor",
  "carot",
  "listen",
  "enlist",
  "debit",
  "bided",
  "tear",
  "rate",
  "night",
  "thing",
  "lives",
  "veils",
  "stressed",
  "desserts",
  "dormitory",
  "dirty room",
  "rescue",
  "secure",
  "a gentleman",
  "elegant man",
  "listen",
  "heart",
  "angel",
  "leader",
  "silent",
]);

//Getter and setter
const user = {
  firstName: "",
  lastName: "",
  age: "",
  set userInfo(user) {
    if (typeof user === "string") {
      [this.firstName, this.lastName, this.age] = user.split(" ");
    }
    if (typeof user === "object") {
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.age = user.age;
    }
  },

  get userInfo() {
    return `${this.firstName} ${this.lastName} ${this.age}`;
  },
};
user.userInfo = "Francine Smith 38";
user.userInfo;

user.userInfo = { firstName: "Stan", lastName: "Smith", age: 42 };
user.userInfo;

//Create arr method
const obj = {
  from: 1,
  to: 10,
};
const createArr = (obj) => {
  const newArr = [];
  for (let i = obj.from; i <= obj.to; i++) {
    newArr.push(i);
  }
  obj.arr = newArr;
};

const obj1 = {
  from: 1,
  to: 10,
};
const createArr2 = function () {
  const newArr = [];
  for (let i = this.from; i <= this.to; i++) {
    newArr.push(i);
  }
  this.arr = newArr;
};
const bindedCreatedArr2 = createArr2.bind(obj1);
createArr2.call(obj1);

//Constructor Function
class Car {
  constructor(model, color, age, speed, gasTank, started) {
    this.model = model;
    this.color = color;
    this.age = age;
    this.speed = speed;
    this.gasTank = gasTank;
    this.started = started;
  }
  startEngine() {
    if (this.gasTank > 0) {
      this.started = true;
    }
    return this;
  }
  drive() {
    if (this.started === true && this.gasTank > 0) {
      this.speed = 30;
    }
    return this;
  }
  stop() {
    this.started = false;
    return this;
  }
  speedUp(argument) {
    const maxSpeed = 200;
    this.speed += argument;
    this.gasTank -= 5;
    if (this.speed + argument >= maxSpeed) {
      this.speed = maxSpeed;
    }
    if (this.gasTank < 0) {
      this.stop();
    }
    return this;
  }
  slowDown(argument) {
    const minSpeed = 0;
    if (this.speed - argument > minSpeed) {
      this.speed -= argument;
    }
    return this;
  }
  addGas(arg) {
    const maxGas = 20;
    this.gasTank += arg;
    if (this.gasTank + arg >= maxGas) {
      this.gasTank = maxGas;
    }
    return this;
  }
}
const myCar = new Car("Suzuki", "blue", 4, 80, 15, true);
myCar
  .startEngine()
  .drive()
  .stop()
  .startEngine()
  .drive()
  .speedUp(5)
  .slowDown(5)
  .addGas(5)
  .stop();
