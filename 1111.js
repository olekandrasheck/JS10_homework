const set = new Set();
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

strings.forEach((element) => {
  set.add(element);
});

function callName() {
  return this.name + this.age;
}

const user = {
  name: "Taras",
  age: 25,
};
user.callName = callName;
function callCall() {
  callName();
}
user.callCall = callCall;
user.callCall();
