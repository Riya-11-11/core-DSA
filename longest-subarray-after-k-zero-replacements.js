// Day 16 — Sliding Window Practice (Pattern Recognition)
// Q1️⃣ Longest Subarray of 1's After Replacing at Most K Zeroes
// arr = [1,1,1,0,0,0,1,1,1,1,0]
// k = 2

// Find:

// length of longest subarray containing only 1s
// after replacing at most k zeroes

// Example:

// Replace:

// 0 → 1
// 0 → 1

// Longest length becomes:

// 6

let arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;
let zeroCount = 0;
let maxLength = 0;
let l = 0;

for (let r = 0; r < arr.length; r++) {
  let val = arr[r];
  if (val === 0) {
    zeroCount++;
  }
  while (zeroCount > k) {
    let leftVal = arr[l];
    if (leftVal === 0) {
      zeroCount--;
    }
    l++;
  }
  let length = r - l + 1;
  if (length > maxLength) {
    maxLength = length;
  }
}
console.log(maxLength);


