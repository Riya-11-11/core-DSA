// nums = [2, 1, 5, 1, 3, 2]
// k = 3

// Possible windows:
// [2, 1, 5] → 8
// [1, 5, 1] → 7
// [5, 1, 3] → 9  ← maxSumimum
// [1, 3, 2] → 6

// Output:
// 9

let nums = [2, 1, 5, 1, 3, 2];
let k = 3;

let windowSum = 0;
let maxSum = 0;

for (let i = 0; i < k; i++) {
  windowSum += nums[i];
}

maxSum = windowSum;

for (let j = 0; j < nums.length - k; j++) {
  windowSum -= nums[j];
  windowSum += nums[j + k];
  if (windowSum > maxSum) {
    maxSum = windowSum;
  }
}

console.log(maxSum);
