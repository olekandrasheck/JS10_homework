//Pythagorean theorem +++
//aa + bb = c*c
const pythagorean = (a, b) => {
  return Math.sqrt(a * a + b * b);
};
pythagorean(5, 12);

// Show number in money format ???
function formatMoney(money) {
  let string = money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  if (money >= 0) {
    return `+ ${string}`;
  } else return string;
}
formatMoney(1232323);

//Format number in spaces +++
function formatNumber(num) {
  return num.toLocaleString();
}
formatNumber(1223.65378);

// Write a password generator with length n ++
function generatePassword(n) {
  const upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const low = "abcdefghijklmnopqrstuvwxyz";
  const sym = "!@#№;%:&*()-_+=";
  const dig = "0123456789";
  const strAll = upp + low + sym + dig;

  let password = "";
  for (let i = 0; i <= n; i++) {
    password += strAll.charAt(Math.floor(Math.random() * strAll.length));
  }
  return password;
}
generatePassword(8);

//calculate percentage with n numbers after dot secondNum * 100% / firstNum ++
function calc(firstNum, secondNum, n) {
  let result = (secondNum / firstNum) * 100;
  return result.toFixed(n);
}
calc(200, 0.14, 1);

//Get integer part of number and decimal +++
function splitNumber(number) {
  let correctNumber = number.toFixed(2);
  if (!Number.isInteger(correctNumber)) {
    let decim = correctNumber - Math.floor(correctNumber);
    return `int: ${Math.floor(correctNumber)}, decimal: ${decim}`;
  } else return `int: ${correctNumber}, decimal: 0`;
}
splitNumber(2.34);

function otherSplitNumber(number) {
  let strNumber = String(number);
  let arrNumber = strNumber.split(".");
  if (!Number.isInteger(number)) {
    return `int: ${arrNumber[0]}, decimal: ${arrNumber[1]}`;
  } else return `int: ${number}, decimal: 0`;
}

otherSplitNumber(2);

//Check if prime ++

function isPrime(n) {
  if (n < 1) return false;
  if (n <= 3) return true;

  if (n % 2 == 0 || n % 3 == 0) return false;

  for (var i = 5; i * i <= n; i = i + 6) {
    if (number % i == 0 || n % (i + 2) == 0) return false;
  }

  return true;
}
isPrime(8);

//Check if number is Armstrong Number +++

function toArray(n) {
  const stringNumber = String(n);

  const arrayNumber = Array.from(stringNumber);

  console.log(arrayNumber);

  const numberAfter = arrayNumber.reduce((acc, item) => acc + item ** 3, 0);

  console.log(numberAfter);
  if (numberAfter === n) return true;
  else return false;
}
toArray(153);
