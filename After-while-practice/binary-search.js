// Today's Question 1 — Binary Search
// Given a sorted array:

// let nums = [1, 3, 5, 7, 9, 11, 13];
// let target = 9;

// Find the index of target.

// Expected output:

// 4

// If target array mein nahi hai, return:

// -1

let nums = [1, 3, 5, 7, 9, 11, 13];
let target = 9;

let l = 0;
let r = nums.length - 1;
let mid = Math.floor((l + r) / 2);

let ans = -1;

while (l <= r) {
  if (nums[mid] === target) {
    ans = mid;
    break;
  } else if (target > nums[mid]) {
    l = mid + 1;
    mid = Math.floor((l + r) / 2);
  } else {
    r = mid - 1;
    mid = Math.floor((l + r) / 2);
  }
}
console.log(ans);
