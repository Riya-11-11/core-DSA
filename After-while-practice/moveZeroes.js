// Today's Question 1 — Move Zeroes

// Given:
// let nums = [0, 1, 0, 3, 12];

// Array ke saare 0s ko end mein move karo, while keeping the relative order of non-zero elements the same.

// Expected result:
// [1, 3, 12, 0, 0]

let nums = [0, 1, 0, 3, 12];

let left = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    nums[left] = nums[i];
    left++;
  }
}
for (let j = left; j < nums.length; j++) {
  nums[j] = 0;
}

console.log(nums);
