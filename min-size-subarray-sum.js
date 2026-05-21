// Create:
// sliding-window/min-size-subarray-sum.js

// Problem:
// arr = [2,3,1,2,4,3]
// target = 7

// Find:
// smallest length subarray
// whose sum >= target

// Example:
// [4,3]
// sum = 7
// length = 2

// Answer:
// 2

let arr = [2, 3, 1, 2, 4, 3];
let target = 7;
let sum = 0;
let smallestLen = Infinity;
let l = 0;

for (let r = 0; r < arr.length; r++) {
  let val = arr[r];
  sum += val;
  while (sum >= target) {
    let length = r - l + 1;
    if (length < smallestLen) {
      smallestLen = length;
    }

    let leftVal = arr[l];
    sum -= leftVal;
    l++;
  }
}

console.log(smallestLen);
