//Get days in year
//try to have one return in function
const countDays = (year) => {
  const isYearDivisionBy4 = year % 100 !== 0 && year % 4 === 0;
  const isYearDivisionB400 = year % 400 === 0;
  const countDays = isYearDivisionBy4 || isYearDivisionB400 ? 366 : 365;
  return countDays;
};
countDays(2020);

//Get day of a year
//86400000 numbers like this are better to store in const with self-explained name
//you don't change diff later in a function, so it's better to use const
const getDayNumber = (date) => {
  const current = new Date(date);
  const year = current.getFullYear();
  const newYear = new Date(year, 0, 1);
  const msInDay = 86400000;
  const diff = Math.floor((current - newYear) / msInDay);
  return diff + 1;
};
getDayNumber("2023-01-12");

// Get fiscal quarters Feb 26 is I quarter
const getQuarters = (d) => {
  const date = new Date(d);
  const monthNum = date.getMonth();
  const montNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const quarterNum = (monthNum) => {
    switch (true) {
      case monthNum <= 2:
        return "I";
      case monthNum <= 5:
        return "II";
      case monthNum <= 8:
        return "III";
      case monthNum <= 11:
        return "IV";
    }
  };
  const day = date.getDate();
  return `${montNames[monthNum]}  ${day} is ${quarterNum(monthNum)} quarter`;
};
getQuarters("2023-02-26");

//Write a function to calculate date diff
//please check prev comments about number const
const calcDateDiff = (start, end) => {
  const dateFirst = new Date(start);
  const dateSecond = new Date(end);
  let diff = Math.abs((dateFirst.getTime() - dateSecond.getTime()) / 1000);
  let minute = Math.round(diff / 60);
  let hours = Math.floor(diff / (60 * 60 * 24));
  let month = Math.floor(diff / (60 * 60 * 24 * 7 * 4));
  let year = Math.floor(diff / (60 * 60 * 24) / 365.25);
  const hourInSeconds = 3600;
  const dayInSeconds = 86400;
  const monthInSeconds = 2629743;
  const yearInSeconds = 31556926;

  if (diff < hourInSeconds) {
    return `${minute} minutes`;
  }
  if (diff < dayInSeconds) {
    let min = diff / 60;
    let hour = Math.floor(min / 60);
    let minFinal = min - hour * 60;
    return `${hour} hours ${minFinal}  minutes`;
  }
  if (diff < monthInSeconds) {
    return `${hours} days`;
  }
  if (diff < yearInSeconds) {
    return `${month} months`;
  } else return `${year} years`;
};
calcDateDiff("2023-02-26 14:00", "2025-05-28 15:30");

//Create a map
const createMap = (arr) => {
  const map = new Map();
  arr.forEach((item) => {
    map.set(item.id, item);
  });
  return map;
};
createMap([
  { id: 1, value: 1, date: "2022-02-15" },
  { id: 2, value: 1242, date: "2023-02-15" },
  { id: 3, value: 3342, date: "2021-02-15" },
]);

//Create a cache
//cacheCalcDateDiff(startDate, endDate);
//ideally is to use function from date diff task not just

const cache = new Map();

const cacheCalcDateDiff = (startDate, endDate) => {
  const key = `${startDate} ${endDate}`; //generate unic key
  if (!cache.has(key)) {
    //if there is not key in cache
    const diff = calcDateDiff(startDate, endDate); // calculate diff between end and start for get value
    cache.set(key, diff); // add the value to rhe cache with the unic key
  }
  return cache.get(key); //now we have key and value, so retutn the value of exicting key
};
cacheCalcDateDiff("2012-01-15", "2013-02-13");
