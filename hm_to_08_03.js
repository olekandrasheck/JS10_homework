//Closure
function calculate(number) {
  let result = number;
  return {
    add: (number) => {
      return (result += number);
    },
    substract: (number) => {
      return (result -= number);
    },
    multiple: (number) => {
      return (result *= number);
    },
    divide: (number) => {
      return (result /= number);
    },
    reset: (number) => {
      return (result = 0);
    },
  };
}
const myObj = calculate(3);
myObj.add(4);
myObj.substract(3);
myObj.multiple(4);
myObj.divide(2);
myObj.reset();

//Decorator

const cachesDecorator = (func) => {
  const cache = new Map();
  return function (num) {
    //Closure func
    if (cache.has(num)) {
      return cache.get(num);
    }
    let result = func.call(this, num);
    cache.set(num, result);
    return cache.get(num);
  };
};

const obj = {
  num: 1,
  result: null,
  sum(num) {
    return this.num + num;
  },
};
const decoratedSum = cachesDecorator(obj.sum);
decoratedSum.call(obj, 3);

//Factorial recursion (optional)
function factorial(f) {
  if (f === 1) {
    return 1;
  } else {
    return f * factorial(f - 1);
  }
}
factorial(5);

const list = {
  name: "Taras",
  next: {
    name: "Kateryna",
    next: {
      name: "Andriy",
      next: {
        name: "Julia",
        next: null,
      },
    },
  },
};
const printName = (list) => {
  console.log(list.name);
  if (!list.next === null) {
    return;
  } else {
    printName(list.next);
  }
};
printName;

const sumNymber = (n) => {
  debugger;
  if (n === 1) {
    return 1;
  } else {
    return n + sumNymber(n - 1);
  }
};
sumNymber(10);

const person = {
  eats: true,
  sleep: true,
};

const andrii = {
  studies: true,
  __proto__: person,
};
const taras = Object.create(person, {
  studies: {
    value: true,
    // enumerable: true,
    // writable: false,
    // configurable: false,
  },
  method: {
    value: fnction () {},
  },
});
console.log(taras);


// const country = {
//   country: "Ukraine",
// };

// const city = {
//   city: "Kharkiv",
//   __proto__: country,
// };
// const street = {
//   street: "Timiryzeva",
//   __proto__: city,
// };
// const house = {
//   number: 40,
//   __proto__: street,
// };

const country = {
  country: "Ukraine",
};

const city = Object.create(country, {
  city: {
    value: "Kharkiv"
    // enumerable: true,
    // writable: false,
    // configurable: false,
  },
});
const street = Ob{
  street: "Timiryzeva",
  __proto__: city,
};
const house = Object.create(street, {
  house: {
    value: "40",
     enumerable: true,
    
  },
});

const cityPlan ={
  houses: [1, 2, 3, 4, 5],
  buildHouse(){
    this.houses=[...this.houses, house];
  }
}
const kyiv = Object.create(cityPlan);
const lviv = Object.create(cityPlan);
const Kharkiv = Object.create(cityPlan);

function Mayor(name){
  this.mayorName = name;
  this.term = 4;
}

function City(cityName, name){
  Mayor.call(this, name);
  this.cityName = cityName;
}

City.prototype = Mayor.prototype;
City.prototype.protoValue = 1;
City.prototype.constructor = City;
City.prototype.protoMetod = function(){
  return this;
}

const odessa = new City('odessa', "Taras");

function Shape(color){
  this.color = color;
}
function Square(color, sideA, sideB){
  Shape.call(this, color);
  this.sideA = sideA;
  this.sideB = sideB;
  this.getArea = function(){
    return this.sideA*this.sideB
  }
}
function Circle(color, radius){
  Circle.call(this, color);
  this.radius = radius;
  this.getArea = function(){
    return Math.PI*Math.sqrt(this.radius)
  }
}
Square.prototype = Shape.prototype;
Square.prototype.constructor = Square;
Square.prototype.getArea = function(){
  return this.sideA*this.sideB
}

Circle.prototype = Circle.prototype;
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function(){
  return Math.PI*this.radius**2;
}

const mySquare = new Square('red', 4, 4)
const myCircle = new Circle('blue', 4)
console.log(myCircle)