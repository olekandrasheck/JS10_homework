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
    let filtered = word.toLowerCase().split("").sort().join("").trim();
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
    this._gasTank = gasTank;
    this.started = started;
  }
  #maxSpeed= 200;
  #minSpeed = 0;
  startEngine = () => {
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
    this.speed += argument;
    this.gasTank -= 5;
    if (this.speed + argument >= #maxSpeed) {
      this.speed = maxSpeed;
    }
    if (this.gasTank < 0) {
      this.stop();
    }
    return this;
  }
  slowDown(argument) {
    if (this.speed - argument > #minSpeed) {
      this.speed -= argument;
    }
    return this;
  }
  #private = true;
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

class Pet {
  constructor(petName, ownerName) {
    this.petName = petName;
    this.ownerName = ownerName;
  }
  static type = "Dog";
  static getTypeArrow = () => {
    return this.type;
  };
  getPetName = () => {
    return `${this.petName}`;
  };
  getOwnerName = () => {
    return `${this.ownerName}`;
  };
  get info() {
    return `${this.petName} ${this.ownerName} `;
  }
  set info({ petName, ownerName }) {
    this.petName = petName;
    this.ownerName = ownerName;
  }
}
const myPet = new Pet("Royal", "Oleksandra");

class Dog extends Pet {
  constructor(haveVaccine, name, ownerName) {
    super(name, ownerName);
    this.haveVaccine = haveVaccine;
  }
  bark = () => {
    this.bark = isBarking;
  };
}

class BigDog extends Dog {
  constructor(...rest) {
    super();
  }
}
const user = new Pet("Peter", "taras");

class Shape {
  constructor(color) {
    this._color = color;
  }
  #private = true;
  #privatedMethod = () => {};
  get color() {
    return this._color;
  }
  setColor(color) {
    this._color = color;
  }
  getColor = () => {
    return this.color;
  };
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  getArea = () => {
    return this.width * this.height;
  };
  getColor = () => {
    const color = super.getColor();
    const area = this.getArea();
    return `Rectangle has ${color}`;
  };
}
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  getArea = () => {
    return Math.round(Math.PI * this.radius ** 2);
  };
}

const myCircle = new Circle("blue", 2);
const myRectangle = new Rectangle("red", 4, 4);

// Rectangle.prototype = Shape.prototype;
// Rectangle.prototype.constructor = Rectangle;
// Rectangle.prototype.getArea = function () {
//   return this.width * this.height;
// };

// Circle.prototype = Shape.prototype;
// Circle.prototype.constructor = Circle;
// Circle.prototype.getArea = function () {
//   return Math.round(Math.PI * this.radius ** 2);
// };

// const myRectangle = new Rectangle("red", 4, 4);
// myRectangle.getArea();
// const myCircle = new Circle("blue", 2);
// console.log(myCircle);
// console.log(myRectangle);
