// Today's Question 1 — Two Sum II

// Given a sorted array:

// let nums = [2, 7, 11, 15];
// let target = 9;

// Find the two indices whose values add up to target.

// Expected output:
// [0, 1]

let nums = [2, 7, 11, 15];
let target = 9;

let l = 0;
let r = nums.length - 1;

let sum = 0;
let ans = [];

while (l < r) {
  sum = nums[l] + nums[r];

  if (sum === target) {
    ans.push(l, r);
    break;
  } else if (sum > target) {
    r--;
  } else {
    l++;
  }
}

console.log(ans);
