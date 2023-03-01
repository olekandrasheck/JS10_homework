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
