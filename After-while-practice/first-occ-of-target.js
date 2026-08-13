// Find the First Occurrence of a Target

// Given a sorted array jisme duplicate values ho sakti hain:

// let nums = [1, 2, 2, 2, 3, 4, 5];
// let target = 2;

// Tumhe target ka first/leftmost index find karna hai.

// Expected output:
// 1

let nums = [1, 2, 2, 2, 3, 4, 5];
let target = 2;

let l = 0;
let r = nums.length - 1;

let ans = -1;

while (l <= r) {
  let m = Math.floor((l + r) / 2);

  if (nums[m] === target) {
    ans = m;
    r = m - 1;
  } else if (target < nums[m]) {
    r = m - 1;
  } else if (target > nums[m]) {
    l = m + 1;
  }
}

console.log(ans);
