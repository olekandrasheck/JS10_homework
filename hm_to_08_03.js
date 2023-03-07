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
const obj = {
  num: 1,
  sum(num) {
    return this.num + num;
  },
};

const cachesDecorator = (func) => {
  let cache = new Map();
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

const sum = function (num) {
  return this.num + num;
};

const decoratedSum = cachesDecorator(sum);
decoratedSum.call(obj, 2);

// const decoratedSum = cachesDecorator(obj.sum);
// decoratedSum(3);

//Factorial recursion (optional)
function factorial(f) {
  if (f === 1) {
    return 1;
  } else {
    return f * factorial(f - 1);
  }
}
factorial(5);
