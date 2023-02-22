// Capitalize words
const phrase = "my name is oleksandra";

function capitalize(phrase) {
  let string = " ";
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i - 1] === " " || i === 0) {
      string = string + phrase[i].toUpperCase();
    } else string = string + phrase[i];
  }
  return string;
}
capitalize(phrase);

//Text truncate
const maxlength = 14;
const stringToTruncate = "Lorem ipsum dolor sit amet, consectetur";

function truncate(maxlength, stringToTruncate) {
  const length = maxlength - 3;
  if (stringToTruncate.length > maxlength) {
    const newString = stringToTruncate.substring(0, length);
    return newString.concat("...");
  } else return stringToTruncate;
}
truncate(maxlength, stringToTruncate);

//Filter arr

const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function range(arr, from, to) {
  let newArr = [];
  while (from <= to) {
    newArr.push(from++);
  }
  return newArr;
}
range(arrOfNumbers, 3, 7);

//Sort arr
const arrSort = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
{
  arrSort.sort(function (a, b) {
    return a - b;
  });
}

//Sort arr str
const arrSortLength = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
arrSortLength.sort(function (a, b) {
  return a.length - b.length || a.localeCompare(b);
});

//Calculate average age of users older then 17 and younger then 55
const arrAge = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

function ages(arrAge) {
  const filteredArray = arrAge.filter((currentValue) => {
    if (currentValue.age > 17 && currentValue.age < 55) {
      return true;
    }
  });
  console.log(filteredArray);
  const averageAge = filteredArray.reduce(
    (accumulator, currentValue, index, array) =>
      (accumulator += currentValue.age),
    0
  );
  console.log(averageAge);
  return averageAge / filteredArray.length;
}
ages(arrAge);

//Sort arr by name Sort arr by name if 2 elements have same name sort by age
const arrName = [
  { name: "John", age: 25 },
  { name: "John", age: 5 },
  { name: "John", age: 2 },
  { name: "John", age: 45 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Mary", age: 2 },
  { name: "Taras", age: 25 },
  { name: "Taras", age: 19 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Alan", age: 32 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
  { name: "Elizabeth", age: 8 },
];

arrName.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return a.age - b.age;
});

//Find min and max
const arrMinMax = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];
function minMax(arrMinMax) {
  const min = Math.min(...arrMinMax.map((value) => value.age));
  const max = Math.max(...arrMinMax.map((value) => value.age));
  return `min: ${min}, max: ${max}`;
}
minMax(arrMinMax);

//Save only unique values
const strings = [
  "Привіт",
  "Світ",
  "Привіт",
  "Світ",
  "Привіт",
  "Привіт",
  "Світ",
  "Світ",
  ":-O",
];

function unique(strings) {
  return strings.reduce((acc, current) => {
    if (!acc.includes(current)) {
      return [...acc, current];
    }
    return acc;
  }, []);
}

unique(strings);
