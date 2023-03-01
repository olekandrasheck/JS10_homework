//Create a map
function createMap(arr) {
  let map = new Map(Object.entries(arr));
  return map;
}
createMap([
  { id: 1, value: 1, date: "2022-02-15" },
  { id: 2, value: 1242, date: "2023-02-15" },
  { id: 3, value: 3342, date: "2021-02-15" },
]);

//Create a cache
//cacheCalcDateDiff(startDate, endDate);

const cache = new Map();

const cacheCalcDateDiff = (startDate, endDate) => {
  const start = new Date(startDate); // string to obj date
  const end = new Date(endDate); // string to obj date
  const key = `${startDate} ${endDate}`; //generate unic key
  if (!cache.has(key)) {
    //if there is not key in cache
    const diff = end.getTime() - start.getTime(); // calculate diff between end and start for get value
    cache.set(key, diff); // add the value to rhe cache with the unic key
  }
  return cache.get(key); //now we have key and value, so retutn the value of exicting key
};
cacheCalcDateDiff("2012-01-15", "2013-02-13");
