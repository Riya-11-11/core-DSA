// let nums = [1,2,2,2,3,4];
// let target = 2;

// Output:
// 3

// count = upperBound - lowerBound;

let nums = [1, 2, 2, 2, 3, 4];
let target = 2;

let lower = nums.length;
let upper = nums.length;

let s = 0;
let e = nums.length - 1;
while (s <= e) {
  let m = Math.floor((s + e) / 2);

  if (nums[m] >= target) {
    lower = m;
    e = m - 1;
  } else {
    s = m + 1;
  }
}

let l = 0;
let r = nums.length - 1;
while (l <= r) {
  let m = Math.floor((l + r) / 2);

  if (nums[m] > target) {
    upper = m;
    r = m - 1;
  } else {
    l = m + 1;
  }
}

// if (lower === undefined) {
//   console.log(0);
//   return;
// }

let result = upper - lower;
console.log(result);
