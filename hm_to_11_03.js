//Prototype inheritance
const university = {
  universityName: "V.N. Karazin Kharkiv National University",
  dean: "Bakirov",
};
const faculty = Object.create(university, {
  facultyName: {
    value: "econom",
    enumerable: true,
    writable: false,
  },
  groups: {
    value: [],
    enlistStudent(studentName) {
      if (faculty.groups <= 11) {
        return groups.push(studentName);
      } else {
        console.log("You can't add a new student");
      }
    },
    enumerable: true,
    writable: false,
  },
});

faculty.universityName;
faculty.enlistStudent("Taras");
faculty.groups;

//Prototype constructor
function Shape(color) {
  this.color = color;
}
function Rectangle(color, width, height) {
  Shape.call(this, color);
  this.width = width;
  this.height = height;
  this.area;
}
function Circle(color, radius) {
  Shape.call(this, color);
  this.radius = radius;
  this.area;
}
Rectangle.prototype = Shape.prototype;
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

Circle.prototype = Shape.prototype;
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function () {
  return Math.round(Math.PI * this.radius ** 2);
};

const myRectangle = new Rectangle("red", 4, 4);
myRectangle.getArea();
const myCircle = new Circle("blue", 2);
console.log(myCircle);
console.log(myRectangle);

//Fibonacci recursion F n = F n − 1 + F n − 2, n>1
const fibonacci = function (n) {
  if (n <= 1) {
    return n; //if n =1, return 1, if n=0, return 0
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

//fibonacci(7);

//Fibonacci recursion with cache
const cacheDecorator = (func) => {
  const cache = new Map();
  return function (n) {
    if (cache.has(n)) {
      return cache.get(n);
    }
    let result = func.call(this, n);
    cache.set(n, result);
    return cache.get(n);
  };
};

const decoratedSum = cacheDecorator(fibonacci);
decoratedSum.call(this, 7);
