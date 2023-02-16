console.log();
const obj = {
  1: true,
  firstNum: 123,
};
obj.firstNum;
obj["firstNum"];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     console.log("fizz");
//   }
//   if (arr[i] % 2 !== 0 && arr[i] !== 3) {
//     console.log("bar");
//   }
//   if (arr[i] === 3) {
//     console.log("bazz");
//   }
// }

let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i += 1;
}
const arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
];

let userName = prompt("Please input name");

swith (userName) {
  case "Oleksandra":
    console.log("знайома");
    break;
  case "Oleksandr:
    console.log("знайома");
    break;
  default: 
  console.log("не знайома");
}
