// Given sorted array:
// let nums = [-7,-3,2,3,11];

// Return squares in sorted order

// Squares:
// [49,9,4,9,121]

// Sorted output:
// [4,9,9,49,121]

// Answer:
// [4,9,9,49,121]

let nums = [-7, -3, 2, 3, 11];
let l = 0;
let r = nums.length - 1;
let ans = [];
let idx = nums.length - 1;

while (!(l > r)) {
  let valL = nums[l] * nums[l];
  let valR = nums[r] * nums[r];

  if (valL > valR) {
    ans[idx] = valL;
    idx--;
    l++;
  } else {
    ans[idx] = valR;
    idx--;
    r--;
  }
}

console.log(ans);
