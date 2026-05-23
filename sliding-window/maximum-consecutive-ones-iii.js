// Given:
// let nums = [1,1,1,0,0,0,1,1,1,1,0];
// let k = 2;

// You can flip at most:
// 2 zeros → ones

// Find:
// longest consecutive ones possible

let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;
let zeroCount = 0;
let maxLen = 0;
let l = 0;

for (let r = 0; r < nums.length; r++) {
  let val = nums[r];
  if (val === 0) {
    zeroCount++;
  }

  while (zeroCount > k) {
    let leftVal = nums[l];
    if (leftVal === 0) {
      zeroCount--;
    }
    l++;
  }

  let length = r - l + 1;
  if (length > maxLen) {
    maxLen = length;
  }
}

console.log(maxLen);
