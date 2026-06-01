// Given:
// let num = 16;

// Output:
// true

// Because:
// 4 * 4 = 16

let num = 16;

let s = 1;
let e = num;

while (s <= e) {
  let m = Math.floor((s + e) / 2);
  let square = m * m;

  if (square === num) {
    console.log(true);
    return;
  } else if (square > num) {
    e = m - 1;
  } else {
    s = m + 1;
  }
}
return console.log(false);
