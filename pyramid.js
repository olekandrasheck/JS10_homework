function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (j >= n + 1 - i && j <= n - 1 + i) {
        string = string + "#";
      } else {
        string = string + " ";
      }
    }
    console.log(string);
  }
}
pyramid(6);
