// Given sorted array
// let nums = [1,2,2,2,3,4];
// let target = 2;

// Return FIRST occurrence index

// Output:
// 1

let nums = [1, 2, 2, 2, 3, 4];
let target = 2;

let s = 0;
let e = nums.length - 1;
let m = Math.floor((s + e) / 2);

let ans;

while (s <= e) {
  if (target === nums[m]) {
    ans = m;
    e=m-1;
    m = Math.floor((s + e) / 2);
  } else if (target > nums[m]) {
    s = m + 1;
    m = Math.floor((s + e) / 2);
  } else {
    e = m - 1;
    m = Math.floor((s + e) / 2);
  }
}

console.log(ans);
