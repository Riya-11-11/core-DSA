// Question 3 — Move Zeroes, but different approach

// Given:
// let nums = [0, 1, 0, 3, 12];

// Array ko in-place modify karo so that all 0s end mein chale jaayein, while non-zero elements ka relative order same rahe.

// Expected:
// [1, 3, 12, 0, 0]

let nums = [0, 1, 0, 3, 12];
let l = 0;
let r = 0;

while (r < nums.length) {
  if (nums[l] === 0) {
    l++;
  } else {
    nums[l] = num[r];
    l++;
    r++;
  }
}

while (r < nums.length) {
  nums[r] = 0;
  r++;
}

console.log(nums);
