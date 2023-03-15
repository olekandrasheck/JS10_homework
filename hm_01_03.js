//Get days in year
const countDays = (year) => {
  if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
    return 366;
  } else return 365;

  const isYearDivisionBy4 = year % 100 !== 0 && year % 4 === 0;
  const isYeadDivisionB400 = year % 400 === 0;
  const countDays = isYearDivisionBy4 || isYeadDivisionB400 ? 365 : 366;
  return countDays;
};
countDays(2020);

//Get day of a year
const getDayNumber = (date) => {
  const current = new Date(date);
  const year = current.getFullYear();
  const newYear = new Date(year, 0, 1);
  let diff = Math.floor((current - newYear) / 86400000);
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
//If diff is less then hour use minutes format If diff is less then day use hour and minute format
// If diff is less then month use days format If diff is less then year use moth format Everything else can be in years format
const calcDateDiff = (start, end) => {
  const dateFirst = new Date(start);
  const dateSecond = new Date(end);
  let diff = Math.abs((dateFirst.getTime() - dateSecond.getTime()) / 1000);
  let minute = Math.round(diff / 60);
  let hours = Math.floor(diff / (60 * 60 * 24));
  let month = Math.floor(diff / (60 * 60 * 24 * 7 * 4));
  let year = Math.floor(diff / (60 * 60 * 24) / 365.25);

  if (diff < 3600) {
    return `${minute} min`;
  }
  if (diff < 86400) {
    let min = diff / 60;
    let hour = Math.floor(min / 60);
    let minFinal = min - hour * 60;
    return `${hour} hours ${minFinal}  minutes`;
  }
  if (diff < 2629743) {
    return `${hours} days`;
  }
  if (diff < 31556926) {
    return `${month} months`;
  } else return `${year} years`;
};
calcDateDiff("2023-02-26 14:00", "2025-05-28 15:30");

//Create a map
