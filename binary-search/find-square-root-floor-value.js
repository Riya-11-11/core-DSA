// Find Square Root (Floor Value)
// Given:
// let x = 8;

// Output:
// 2

let x = 8;

let s = 1;
let e = 8;

let ans = 0;

while (s <= e) {
  let m = Math.floor((s + e) / 2);
  let square = m * m;
  if (square > x) {
    e = m - 1;
  } else {
    ans = m;
    s = m + 1;
  }
}

console.log(ans);
