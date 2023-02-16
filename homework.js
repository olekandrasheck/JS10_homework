// 1) квадратне рівняння ax2 + bx + c = 0
let a = prompt("Please, input a");
let b = prompt("Please, input b");
let c = prompt("Please, input c");
let d = b * b - 4 * a * c;
let x;
let x1 = ((-b + Math.sqrt(d)) / 2) * a;
let x2 = ((-b - Math.sqrt(d)) / 2) * a;
if (a === 0 && b !== 0) {
  alert((x = -c / b));
} else if (a === 0 && b === 0) {
  alert("there is not a solution");
} else {
  if (d < 0) {
    alert("there is not a solution");
  } else if (d === 0) {
    alert((x = -b / (2 * a)));
  } else alert(`${x1} and ${x2}`);
}
// 2) факторіал
let N = prompt("input N");
let i = 1;
let result = 1;
if (i === N) {
  alert(result);
} else
  while (i <= N) {
    result = result * i;
    i += 1;
  }
alert(result);

//3)фібоначчі Fn = Fn-1 + Fn-2
let F = prompt("input F");
let arr = [];
arr[0] = 0;
arr[1] = 1;
for (let k = 2; k < F; k++) {
  arr[k] = arr[k - 2] + arr[k - 1];
}
alert(arr);

let userName = prompt("Please input name");

switch (userName) {
  case "Oleksandra":
    console.log("знайома");
    break;
  case "Oleksandr":
    console.log("знайома");
    break;
  default:
    console.log("не знайома");
}

const obj = { a: 1, b: 2, c: 3, d: 4 };
const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// проходит по ключам
for (let i in obj) {
  console.log("for in", i);
}

for (let i of arr) {
  console.log("for of", i);
}

function myFunc() {}
myFunc();
