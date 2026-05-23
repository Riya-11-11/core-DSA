// Given a sorted array:
// let nums = [2,7,11,15];
// let target = 9;

// Find indices of two numbers whose sum is:
// 9

// Example:
// 2 + 7 = 9

// Indices:
// [0,1]

// Answer:
// [0,1]

let nums = [2, 7, 11, 15];
let target = 9;
let l = 0;
let r = nums.length - 1;
let sum = 0;
let ans = [];

while (l < r) {
  sum = nums[r] + nums[l];
  if (sum === target) {
    ans.push(l, r);
    break;
  }
  if (sum < target) {
    l++;
  } else {
    r--;
  }
}

console.log(ans);
